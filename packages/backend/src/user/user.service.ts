import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import axios, { AxiosResponse } from 'axios';
import { GithubCodeDto } from './dto/code.dto';
import { TokenDto } from './dto/token.dto';
import { User } from './entity/user.entity';
import { UserRepository } from './entity/user.repo';

export interface IGithubUserTypes {
    id: string;
    profileImage: string;
    name: string;
    description: string;
    location: string;
}

@Injectable()
export class UserService {

    constructor(
        private readonly configService: ConfigService,
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {}

    public async register({ code }: GithubCodeDto): Promise<TokenDto> {
        const getTokenUrl: string = 'https://github.com/login/oauth/access_token';

        const request = {
            code,
            client_id: this.configService.get('CLIENT_ID'),
            client_secret: this.configService.get('CLIENT_SECRET'),
        };

        const response: AxiosResponse = await axios.post(getTokenUrl, request, {
            headers: {
                accept: 'application/json',
            },
        });

        if(response.data.error) {
            throw new UnauthorizedException()
        }

        const { access_token } = response.data;

        const getUserUrl: string = 'https://api.github.com/user';

        const { data } = await axios.get(getUserUrl, {
            headers: {
                Authorization: `token ${access_token}`,
            },
        });

        const { login: id, avatar_url: profileImage, name, bio: description, company: location } = data;

        let user: User;
        
        if(await this.userRepository.findById(id) === undefined){
            user = await this.userRepository.saveUser({id, profileImage, name, description, location});
        }else user = await this.userRepository.findById(id);

        //토큰 제작
        return {
            accessToken: this.jwtService.sign({id})
        }
    }
}
