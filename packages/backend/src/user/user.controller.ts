import { Body, Controller, Post } from '@nestjs/common';
import { GithubCodeDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
    private readonly userService: UserService,
    ){}

    @Post('/github-info')
    public async getGithubInfo(@Body() githubCodeDto: GithubCodeDto) {
        const user = await this.userService.getGithubInfo(githubCodeDto);

        return {
            status: 200,
            message: '깃허브 유저정보 조회',
            data: {
                user,
            },
        };
    }

}
