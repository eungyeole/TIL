import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { User } from 'src/user/entity/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => ({
                type: "mysql",
                entities: [User],
                database: config.get("DEVELOPMENT_DATABASE_NAME"),
                host: config.get("DEVELOPMENT_DATABASE_HOST"),
                password: config.get("DEVELOPMENT_DATABASE_PASSWORD"),
                port: config.get("DEVELOPMENT_DATABASE_PORT"),
                username: config.get("DEVELOPMENT_DATABASE_USER"),
                synchronize: true,
                logging: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class TypeOrmConfigModule {}
