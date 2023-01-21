import { Module } from '@nestjs/common';
import { WalletsService } from './services/wallets.service';
import { WalletsController } from './controllers/wallets.controller';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from '../db/entities/wallet.entity';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService],
  imports: [
    TypeOrmModule.forFeature([Wallet]),
    UsersModule,
  ],
  exports: [TypeOrmModule],

})
export class WalletsModule {}
