import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '52.79.51.112',
  port: 3306,
  username: 'kysthayer',
  password: 'rladudtjr1!',
  database: 'task',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
};
