import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [UserController],
    providers: [UserService, ConfigService],
})
export class UserModule {
    
}
