import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'iut-reserve-db.cf9t91xm6k5s.sa-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'postgres',
    password: 'dev-iut-reserve',
    database: 'iut_reserve_dev',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: ['/db/migrations/*.ts'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
