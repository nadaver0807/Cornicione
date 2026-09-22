import { Lead } from '@/lead/Lead.entity';
import { Order } from '@/order/Order.entity';
import { OrderItem } from '@/order-item/OrderItem.entity';
import { Pizza } from '@/pizza/Pizza.entity';
import dotEnv from 'dotenv';
import { resolve } from 'node:path';
import { DataSource, type DataSourceOptions } from 'typeorm';
dotEnv.config();
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const {
  DATABASE,
  DATABASE_URL,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_SCHEMA,
  DB_SSL,
  DB_USER,
  MIGRATIONS_PATH = '',
  WORKSPACE,
} = process.env;

const ssl = DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined;

const IS_COMPILED = __filename.endsWith('.js');

const migrations = IS_COMPILED
  ? [resolve(__dirname, '../../..', `${MIGRATIONS_PATH}migrations`, '*.js')]
  : [resolve(__dirname, '../../..', `${MIGRATIONS_PATH}migrations`, '*.ts')];

const sharedOptions = {
  entities: [Pizza, Order, OrderItem, Lead],
  logging: WORKSPACE === 'local',
  migrations,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'each' as const,
  namingStrategy: new SnakeNamingStrategy(),
  schema: DB_SCHEMA,
  synchronize: false,
  type: 'postgres' as const,
  ssl,
};

const options: DataSourceOptions = DATABASE_URL
  ? { ...sharedOptions, url: DATABASE_URL }
  : {
      ...sharedOptions,
      database: DATABASE,
      host: DB_HOST,
      password: DB_PASSWORD,
      port: Number(DB_PORT),
      username: DB_USER,
    };

export const AppDataSource = new DataSource(options);

export const connectToDb = () => AppDataSource.initialize();
