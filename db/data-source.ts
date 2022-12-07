import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'iut_reserve',
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
