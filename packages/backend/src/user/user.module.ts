import { Module } from '@nestjs/common';
import { ConfigService } from '../shared/config/config.service';
import { ConfigModule } from '../shared/config/config.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './entity/user.repo';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => ({
                secret: config.get("JWT_SECRET_KEY"),
                signOptions: {expiresIn: '120m'},
            }),
            inject: [ConfigService]
        }),
    ],
    controllers: [UserController],
    providers: [
        UserService,
    ],
})
export class UserModule {}
