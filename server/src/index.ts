import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import { createApp } from '@/app';
import { connectToDb } from '@/config/db/db.config';
import { PORT } from '@/server.const';
import { logger } from '@/util/logger';

const createServer = async () => {
  const app = express();

  await createApp(app);
  await connectToDb();

  app.listen(PORT, () => logger.info(`app listening on port ${PORT}`, { port: PORT }));
};

createServer();
