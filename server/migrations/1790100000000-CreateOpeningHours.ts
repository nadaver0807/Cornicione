import { type MigrationInterface, type QueryRunner } from 'typeorm';

const SCHEMA = process.env.DB_SCHEMA ?? 'public';

export class CreateOpeningHours1790100000000 implements MigrationInterface {
  name = 'CreateOpeningHours1790100000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "${SCHEMA}"."opening_hours" (
        "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "weekday" smallint NOT NULL DEFAULT 4,
        "open_time" character varying(5) NOT NULL DEFAULT '17:00',
        "close_time" character varying(5) NOT NULL DEFAULT '22:00',
        "is_active" boolean NOT NULL DEFAULT true,
        "closed_message" character varying NOT NULL DEFAULT '',
        "create_date" TIMESTAMP NOT NULL DEFAULT now(),
        "update_date" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "pk_opening_hours" PRIMARY KEY ("uuid")
      )
    `);

    // שורה יחידה שמייצגת את חלון הפעילות של העסק.
    await queryRunner.query(`
      INSERT INTO "${SCHEMA}"."opening_hours" ("weekday", "open_time", "close_time")
      SELECT 4, '17:00', '22:00'
      WHERE NOT EXISTS (SELECT 1 FROM "${SCHEMA}"."opening_hours")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "${SCHEMA}"."opening_hours"`);
  }
}
