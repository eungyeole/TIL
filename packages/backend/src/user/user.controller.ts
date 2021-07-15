import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { GithubCodeDto } from './dto/code.dto';
import { RefreshToken } from './dto/refresh.dto';
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
        return this.userService.login(githubCodeDto);
    }

    @Put("/refresh")
    public async tokenRefresh(@Body() refreshToken: RefreshToken) {
        return this.userService.refreshToken(refreshToken);
    }

}
