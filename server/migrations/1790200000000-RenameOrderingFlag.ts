import { type MigrationInterface, type QueryRunner } from 'typeorm';

const SCHEMA = process.env.DB_SCHEMA ?? 'public';

export class RenameOrderingFlag1790200000000 implements MigrationInterface {
  name = 'RenameOrderingFlag1790200000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DO $$
      BEGIN
        IF EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_schema = '${SCHEMA}' AND table_name = 'opening_hours'
            AND column_name = 'is_active'
        ) THEN
          ALTER TABLE "${SCHEMA}"."opening_hours"
            RENAME COLUMN "is_active" TO "is_ordering_enabled";
        END IF;
      END $$;
    `);
    await queryRunner.query(`
      ALTER TABLE "${SCHEMA}"."opening_hours"
        ALTER COLUMN "is_ordering_enabled" SET DEFAULT false
    `);
    // ההזמנות סגורות כברירת מחדל עד שהמנהלן יפתח אותן.
    await queryRunner.query(`UPDATE "${SCHEMA}"."opening_hours" SET "is_ordering_enabled" = false`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "${SCHEMA}"."opening_hours"
        ALTER COLUMN "is_ordering_enabled" SET DEFAULT true
    `);
    await queryRunner.query(`
      ALTER TABLE "${SCHEMA}"."opening_hours"
        RENAME COLUMN "is_ordering_enabled" TO "is_active"
    `);
  }
}
