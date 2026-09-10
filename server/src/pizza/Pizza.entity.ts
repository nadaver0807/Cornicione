import { PizzaCategory } from '@shared/enums/pizza-category.enum';
import { type PizzaTopping } from '@shared/types/pizza.type';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Pizza extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', default: '' })
  description: string;

  @Column({ type: 'numeric', precision: 8, scale: 2 })
  price: number;

  @Column({ type: 'varchar', nullable: true })
  imageUrl: string | null;

  @Column({ type: 'enum', enum: PizzaCategory, default: PizzaCategory.Pizza })
  menuCategory: PizzaCategory;

  /** תוספות אפשריות לפריט — שם ומחיר. */
  @Column({ type: 'jsonb', default: () => `'[]'::jsonb` })
  toppings: PizzaTopping[];

  @Column({ type: 'boolean', default: false })
  isVegetarian: boolean;

  @Column({ type: 'boolean', default: false })
  isVegan: boolean;

  /** סימון "אזל" — הפריט נשאר בתפריט אך חסום להזמנה. */
  @Column({ type: 'boolean', default: false })
  isSoldOut: boolean;

  @Column({ type: 'int', default: 0 })
  displayOrder: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;
}
