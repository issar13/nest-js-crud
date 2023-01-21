
import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { Wallet } from './wallet.entity';


@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
  
  @Column({
    nullable: true,
  })
  balance: number;

  @OneToMany(type => Wallet, wallet => wallet.user, {cascade: true})
  wallets: Wallet[]
}
