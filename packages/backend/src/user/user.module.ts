import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './entity/user.repo';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forFeature([UserRepository]),
        JwtModule.register({
            secret: 'testkey',
            signOptions: {expiresIn: '120m'}
        }),
    ],
    controllers: [UserController],
    providers: [
        UserService,
    ],
})
export class UserModule {
    
}
