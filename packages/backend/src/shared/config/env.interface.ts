export interface Env {
    MODE: Mode;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    DEVELOPMENT_DATABASE_HOST: string;
    DEVELOPMENT_DATABASE_PORT: string;
    DEVELOPMENT_DATABASE_USER: string;
    DEVELOPMENT_DATABASE_PASSWORD: string;
    DEVELOPMENT_DATABASE_NAME: string;
    JWT_SECRET_KEY: string;
    JWT_ACCESS_EXPIRE: string
    JWT_REFRESH_EXPIRE: string;
  }
  
  export type Mode = 'production' | 'development' | 'testing';