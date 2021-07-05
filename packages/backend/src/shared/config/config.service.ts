import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { Env } from './env.interface';

@Injectable()
export class ConfigService extends NestConfigService<Env>{}
