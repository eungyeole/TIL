import { Body, Controller, Post } from '@nestjs/common';
import { GithubCodeDto } from './dto/code.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
    private readonly userService: UserService,
    ){}

    @Post('/register')
    public async register(@Body() githubCodeDto: GithubCodeDto) {
        const token = await this.userService.register(githubCodeDto);

        return {
            status: 200,
            message: '로그인',
            data: {
                token,
            },
        };
    }

}
