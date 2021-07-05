import { ConnectionOptions } from "typeorm";

interface DBConnectionOptions {
    [env: string]: ConnectionOptions;
}


  const connectionOptions = ():DBConnectionOptions => {
    console.log(process.env.DEVELOPMENT_DATABASE_HOST);
    return ({
    development: {
      type: "mysql",
      host: process.env.DEVELOPMENT_DATABASE_HOST,
      port: +process.env.DEVELOPMENT_DATABASE_PORT,
      username: process.env.DEVELOPMENT_DATABASE_USER,
      password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
      database: process.env.DEVELOPMENT_DATABASE_NAME,
      synchronize: true,
      logging: true,
      entities: ["dist/**/*.entity{.ts,.js}"],
    },
  })};
  
  export { connectionOptions };