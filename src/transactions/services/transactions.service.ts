import { HttpException, Injectable } from '@nestjs/common';
import { AddTransactionDto } from '../dtos/transaction.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from '../../db/entities/wallet.entity';

import { Transaction } from '../../db/entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {}

  async addTransaction(walletId: number, data: AddTransactionDto) {
    
    try {
        const wallet = await this.walletRepository.findOneBy({ id: walletId });
        if (!wallet) {
          throw new HttpException('Wallet not found', 409);
        }
    
        if(data.type === 'income') {
            wallet.balance += data.amount;
        } else if(data.type === 'expense') {
            wallet.balance -= data.amount;
        }
        const transaction = new Transaction();
        transaction.type = data.type;
        transaction.amount = data.amount;
        transaction.description = data.description;
        transaction.wallet = wallet;
        const transactionCompleted = await this.transactionRepository.save(transaction);
        const walletUpdated = await this.walletRepository.save(wallet);
    
        return {data:{transactionCompleted,walletUpdated}, message: 'transaction recorded successfully'}
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
