import { type MigrationInterface, type QueryRunner } from 'typeorm';

const SCHEMA = process.env.DB_SCHEMA ?? 'public';

export class AddLeadEventFields1790300000000 implements MigrationInterface {
  name = 'AddLeadEventFields1790300000000';
  transaction = false;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "${SCHEMA}"."lead_lead_type_enum" ADD VALUE IF NOT EXISTS 'COLLABORATION'`,
    );
    await queryRunner.query(`
      ALTER TABLE "${SCHEMA}"."lead"
        ADD COLUMN IF NOT EXISTS "event_date" character varying NOT NULL DEFAULT '',
        ADD COLUMN IF NOT EXISTS "guest_count" character varying NOT NULL DEFAULT '',
        ADD COLUMN IF NOT EXISTS "location" character varying NOT NULL DEFAULT ''
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "${SCHEMA}"."lead"
        DROP COLUMN IF EXISTS "event_date",
        DROP COLUMN IF EXISTS "guest_count",
        DROP COLUMN IF EXISTS "location"
    `);
    // ערך enum אינו ניתן להסרה בבטחה ב-Postgres — 'COLLABORATION' נשאר במסד.
  }
}
