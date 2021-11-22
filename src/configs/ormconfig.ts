import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: 'mariadb',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: 'root',
//  password: process.env.TYPEORM_PASSWORD,
  database: 'sgarage_db',
  entities: ['dist/common/entities/*.entity{.ts,.js}'],
  subscribers: ['dist/common/subscribers/*.subscriber{.ts,.js}'],
  migrations: ['dist/common/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
  synchronize: false,
  cli: {
    migrationsDir: 'src/common/migrations',
    entitiesDir: 'src/common/entities',
    subscribersDir: 'src/common/migrations',
  }
};
export default config
