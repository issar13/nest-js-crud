import { Module } from '@nestjs/common';
import { TransactionService } from './services/transactions.service';
import { TransactionController } from './controllers/transactions.controller';
import { Transaction } from '../db/entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletsModule } from '../wallets/wallets.module';
@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
  imports: [
    TypeOrmModule.forFeature([Transaction]),
    WalletsModule,
  ],
})
export class TransactionsModule {}
