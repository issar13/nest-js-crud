import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Wallet } from './wallet.entity';

@Entity('transactions')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  amount: number;

  @Column()
  description: string;

  @ManyToOne(type => Wallet, wallet => wallet.transactions)
  wallet: Wallet;
}
