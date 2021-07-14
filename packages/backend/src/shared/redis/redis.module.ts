import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisService } from './redis.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                store: redisStore,
                host: 'localhost',
                port: 6379,
                ttl: configService.get("CACHE_TTL"),
                password: 'asdf',
            })
        }),
        // CacheModule.register({
        //     store: redisStore,
        //     host: 'localhost',
        //     port: 6379,
        //     password: 'asdf'
        //   }),
    ],
    providers: [RedisService],
    exports: [RedisService],
})
export class RedisModule {}
