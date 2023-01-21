import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { User } from './db/entities/user.entity';
import { Wallet } from './db/entities/wallet.entity';
import { WalletsModule } from './wallets/wallets.module';
import { Transaction } from './db/entities/transaction.entity';

config();

const configService = new ConfigService();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configService.get('POSTGRES_HOST'),
      port: configService.get('POSTGRES_PORT'),
      username: configService.get('POSTGRES_USER'),
      password: configService.get('POSTGRES_PASSWORD'),
      database: configService.get('POSTGRES_DB'),
      entities: [User, Wallet, Transaction],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    TransactionsModule,
    WalletsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
