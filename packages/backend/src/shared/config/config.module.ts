import { Module } from "@nestjs/common";
import { ConfigService } from "../config/config.service";

@Module({
    providers: [ConfigService],
})
export class ConfigModule {}
