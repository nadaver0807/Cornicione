import { Weekday } from '@shared/enums/weekday.enum';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/** שורה יחידה שמחזיקה את חלון הפעילות, נערכת על ידי המנהלן. */
@Entity()
export class OpeningHours extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'smallint', default: Weekday.Thursday })
  weekday: Weekday;

  @Column({ type: 'varchar', length: 5, default: '17:00' })
  openTime: string;

  @Column({ type: 'varchar', length: 5, default: '22:00' })
  closeTime: string;

  /** כיבוי ידני — סוגר את ההזמנות גם ביום הפעילות. */
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'varchar', default: '' })
  closedMessage: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
