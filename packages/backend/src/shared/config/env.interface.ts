export interface Env {
    MODE: Mode;
    JWT_SECRET_KEY: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    DEVELOPMENT_DATABASE_HOST: string;
    DEVELOPMENT_DATABASE_PORT: string;
    DEVELOPMENT_DATABASE_USER: string;
    DEVELOPMENT_DATABASE_PASSWORD: string;
    DEVELOPMENT_DATABASE_NAME: string;
  }
  
  export type Mode = 'production' | 'development' | 'testing';