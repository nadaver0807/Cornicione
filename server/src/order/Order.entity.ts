import { OrderItem } from '@/order-item/OrderItem.entity';
import { OrderStatus } from '@shared/enums/order-status.enum';
import { OrderType } from '@shared/enums/order-type.enum';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /** מספר רץ קריא ללקוח ולמטבח. */
  @Column({ type: 'int' })
  @Generated('increment')
  orderNumber: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.Pending })
  status: OrderStatus;

  @Column({ type: 'enum', enum: OrderType })
  orderType: OrderType;

  @Column({ type: 'varchar' })
  customerName: string;

  @Column({ type: 'varchar' })
  customerPhone: string;

  @Column({ type: 'varchar' })
  customerEmail: string;

  @Column({ type: 'varchar', nullable: true })
  address: string | null;

  @Column({ type: 'varchar', default: '' })
  note: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  subtotal: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  deliveryFee: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  total: number;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true, eager: true })
  items: OrderItem[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
