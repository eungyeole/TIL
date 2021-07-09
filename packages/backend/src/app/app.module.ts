import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from '../shared/typeorm/typeorm.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
