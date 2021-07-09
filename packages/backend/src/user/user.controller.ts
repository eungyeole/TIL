import { Body, Controller, Get, Post } from '@nestjs/common';
import { GithubCodeDto } from './dto/code.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
    constructor(
    private readonly userService: UserService,
    ){}

    @Get('/oauth')
    public async oauthLink(): Promise<string> {
        return this.userService.oauthLink();
    }

    @Post('/login')
    public async login(@Body() githubCodeDto: GithubCodeDto) {
        const token = await this.userService.login(githubCodeDto);

        return (token);
    }

}
