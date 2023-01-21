import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn, 
    BaseEntity
} from 'typeorm';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

@Entity('wallets')
export class Wallet extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'wallet_id',
      })
      id: number;
    
    @Column({
        nullable: true,
      })
      balance: number;

    @Column({
        nullable: true,
      })
      wallet_name: string;

    @ManyToOne(type => User, user => user.wallets)
    user: User;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;


    @OneToMany(type => Transaction, transaction => transaction.wallet)
    transactions: Transaction[];
    

}