import 'reflect-metadata';
import { connectToDb } from '@/config/db/db.config';
import { Pizza } from '@/pizza/Pizza.entity';
import { PIZZA_SEED } from '@/seeds/pizza.seed';
import { logger } from '@/util/logger';

const seed = async () => {
  await connectToDb();

  const existing = await Pizza.count();

  if (existing > 0) {
    logger.info('menu already seeded — skipping');

    return;
  }

  await Pizza.save(PIZZA_SEED.map((pizza) => Pizza.create({ ...pizza })));

  logger.info(`seeded ${PIZZA_SEED.length} menu items`);
};

seed()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    logger.error(error.message, { stack: error.stack });
    process.exit(1);
  });
