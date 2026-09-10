import { type MigrationInterface, type QueryRunner } from 'typeorm';

const SCHEMA = process.env.DB_SCHEMA ?? 'public';

export class CreateTables1790000000000 implements MigrationInterface {
  name = 'CreateTables1790000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "${SCHEMA}"`);
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(`
      CREATE TYPE "${SCHEMA}"."pizza_menu_category_enum"
      AS ENUM ('PIZZA', 'FOCACCIA', 'ANTIPASTI', 'DESSERT', 'DRINK')
    `);

    await queryRunner.query(`
      CREATE TYPE "${SCHEMA}"."order_order_type_enum" AS ENUM ('TAKEAWAY', 'DELIVERY')
    `);

    await queryRunner.query(`
      CREATE TYPE "${SCHEMA}"."order_status_enum"
      AS ENUM ('PENDING', 'APPROVED', 'READY', 'COMPLETED', 'CANCELLED')
    `);

    await queryRunner.query(`
      CREATE TYPE "${SCHEMA}"."lead_lead_type_enum"
      AS ENUM ('BUSINESS', 'PRIVATE_EVENT', 'GENERAL')
    `);

    await queryRunner.query(`
      CREATE TABLE "${SCHEMA}"."pizza" (
        "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying NOT NULL,
        "description" character varying NOT NULL DEFAULT '',
        "price" numeric(8,2) NOT NULL,
        "image_url" character varying,
        "menu_category" "${SCHEMA}"."pizza_menu_category_enum" NOT NULL DEFAULT 'PIZZA',
        "toppings" jsonb NOT NULL DEFAULT '[]'::jsonb,
        "is_vegetarian" boolean NOT NULL DEFAULT false,
        "is_vegan" boolean NOT NULL DEFAULT false,
        "is_sold_out" boolean NOT NULL DEFAULT false,
        "display_order" integer NOT NULL DEFAULT 0,
        "create_date" TIMESTAMP NOT NULL DEFAULT now(),
        "update_date" TIMESTAMP NOT NULL DEFAULT now(),
        "delete_date" TIMESTAMP,
        CONSTRAINT "pk_pizza" PRIMARY KEY ("uuid")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "${SCHEMA}"."order" (
        "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "order_number" SERIAL NOT NULL,
        "status" "${SCHEMA}"."order_status_enum" NOT NULL DEFAULT 'PENDING',
        "order_type" "${SCHEMA}"."order_order_type_enum" NOT NULL,
        "customer_name" character varying NOT NULL,
        "customer_phone" character varying NOT NULL,
        "customer_email" character varying NOT NULL,
        "address" character varying,
        "note" character varying NOT NULL DEFAULT '',
        "subtotal" numeric(10,2) NOT NULL DEFAULT 0,
        "delivery_fee" numeric(10,2) NOT NULL DEFAULT 0,
        "total" numeric(10,2) NOT NULL DEFAULT 0,
        "create_date" TIMESTAMP NOT NULL DEFAULT now(),
        "update_date" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "pk_order" PRIMARY KEY ("uuid")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "${SCHEMA}"."order_item" (
        "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "pizza_uuid" uuid NOT NULL,
        "name" character varying NOT NULL,
        "quantity" integer NOT NULL DEFAULT 1,
        "unit_price" numeric(8,2) NOT NULL,
        "toppings" jsonb NOT NULL DEFAULT '[]'::jsonb,
        "note" character varying NOT NULL DEFAULT '',
        "order_uuid" uuid,
        CONSTRAINT "pk_order_item" PRIMARY KEY ("uuid"),
        CONSTRAINT "fk_order_item_order" FOREIGN KEY ("order_uuid")
          REFERENCES "${SCHEMA}"."order"("uuid") ON DELETE CASCADE
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "${SCHEMA}"."lead" (
        "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "lead_type" "${SCHEMA}"."lead_lead_type_enum" NOT NULL,
        "full_name" character varying NOT NULL,
        "phone" character varying NOT NULL,
        "email" character varying NOT NULL DEFAULT '',
        "business_name" character varying NOT NULL DEFAULT '',
        "message" character varying NOT NULL DEFAULT '',
        "create_date" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "pk_lead" PRIMARY KEY ("uuid")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "${SCHEMA}"."lead"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "${SCHEMA}"."order_item"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "${SCHEMA}"."order"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "${SCHEMA}"."pizza"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "${SCHEMA}"."lead_lead_type_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "${SCHEMA}"."order_status_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "${SCHEMA}"."order_order_type_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "${SCHEMA}"."pizza_menu_category_enum"`);
  }
}
