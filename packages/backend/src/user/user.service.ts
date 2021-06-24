import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';
import { GithubCodeDto } from './user.dto';

export interface IGithubUserTypes {
    githubId: string;
    avator: string;
    name: string;
    description: string;
    location: string;
}

@Injectable()
export class UserService {

    constructor(
        private readonly configService: ConfigService
    ) {}

    public async getGithubInfo({ code }: GithubCodeDto): Promise<IGithubUserTypes> {
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

        const { login: githubId, avator_url: avator, name, bio: description, company: location } = data;
        return { githubId, avator, name, description, location };
    }
}
