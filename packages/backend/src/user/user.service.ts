import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import axios, { AxiosResponse } from 'axios';
import { access } from 'fs';
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
    public async getGithubInfo(githubCodeDto: GithubCodeDto): Promise<IGithubUserTypes> {
        const { code } = githubCodeDto;

        const getTokenUrl: string = 'https://github.com/login/oauth/access_token';

        const request = {
            code,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
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

        const { login, avator_url, name, bio, company } = data;

        const githubInfo: IGithubUserTypes = {
            githubId: login,
            avator: avator_url,
            name: name,
            description: bio,
            location: company,
        };

        return githubInfo;
    }
}
