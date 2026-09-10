import { LeadType } from '@shared/enums/lead-type.enum';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lead extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'enum', enum: LeadType })
  leadType: LeadType;

  @Column({ type: 'varchar' })
  fullName: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar', default: '' })
  email: string;

  @Column({ type: 'varchar', default: '' })
  businessName: string;

  @Column({ type: 'varchar', default: '' })
  message: string;

  @CreateDateColumn()
  createDate: Date;
}
