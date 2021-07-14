import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../shared/config/config.service';
import { JwtService } from '@nestjs/jwt';
import axios, { AxiosResponse } from 'axios';
import { GithubCodeDto } from './dto/code.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entity/user.entity';
import { UserRepository } from './entity/user.repo';
import { RefreshToken } from './dto/refresh.dto';
import { RedisService } from 'src/shared/redis/redis.service';


export interface IGithubRepoTypes {
    url: string;
    description: string;
    updated_at: Date;
    language: string;
}

@Injectable()
export class UserService {

    constructor(
        private readonly configService: ConfigService,
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
        private readonly redisService: RedisService,
    ) {}

    private static scope: string = 'repo,user'

    public async oauthLink(): Promise<string> {
        return 'https://github.com/login/oauth/authorize?scope=' + UserService.scope + '&client_id=' + this.configService.get('CLIENT_ID');
    }


    public async login({ code }: GithubCodeDto): Promise<LoginDto> {
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

        const getUserUrl: string = 'https://api.github.com/';

        const userInfoRes = await axios.get(getUserUrl + 'user', {
            headers: {
                Authorization: `token ${access_token}`,
            },
        });

        const { login: id, avatar_url: profileImage, name, bio: description, company: location } = userInfoRes.data;

        const repoInfoRes = await axios.get(getUserUrl + 'users/leeseojune53/repos', {
            headers: {
                Authorization: `token ${access_token}`,
            },
        });

        let user: User;
        let repositories: string[];
        
        if(await this.userRepository.findById(id) === undefined){
            user = await this.userRepository.saveUser({id, profileImage, name, description, location});
        }else user = await this.userRepository.findById(id);
        
        if(user.repository === null) 
            repositories = repoInfoRes.data.map(res => res.name);

        const accessToken: string =  this.jwtService.sign({id: id, type: 'accessToken'}, {
            secret: this.configService.get("JWT_SECRET_KEY"),
            expiresIn: `${this.configService.get("JWT_ACCESS_EXPIRE")}s`
        });

        const refreshToken: string =  this.jwtService.sign({id: id, type: 'refreshToken'}, {
            secret: this.configService.get("JWT_SECRET_KEY"),
            expiresIn: `${this.configService.get("JWT_REFRESH_EXPIRE")}s`
        });

        this.redisService.set(user.id, refreshToken, this.configService.get("JWT_REFRESH_EXPIRE"));

        return ({
            accessToken,
            refreshToken,
            repositories
        });
    }

    // public async refreshToken(refreshToken: RefreshToken): Promise<TokenDto> {

    //     this.jwtService.decode(refreshToken.refreshToken)

    // }
}
