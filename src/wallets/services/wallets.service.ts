import { Injectable, HttpException } from '@nestjs/common';
import { Wallet } from '../../db/entities/wallet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWalletDto } from '../dtos/wallets.dtos';



@Injectable()
export class WalletsService {
    constructor(
        @InjectRepository(Wallet) private readonly walletRepository: Repository<Wallet>,
      ) {}

    
      async createWallet(userId: number, body: CreateWalletDto) {
        try {
            const user = await this.walletRepository.findOne({
                where: {
                  id: userId,
                },
              });
              const wallet = await this.walletRepository.create({
                ...body,
                user: user,
              });
          const newWallet = await this.walletRepository.save(wallet)
        return {data:{newWallet}, message:"Wallet created successfully"}
        } catch (error) {
          throw new HttpException(error.message, 500);
        }
        }


        async getWalletById(userId: number, walletId: number) {
            
            try {
                if (userId == null || walletId == null){
                    return {message: "There is no user or wallet available"}
                } else{
                const wallet = await this.walletRepository.find({
                    relations: ['user', 'transactions'],
                    where: {
                        id: walletId,
                        user: {
                            id: userId,
                        },
                    },
                });
                return {data: {wallet}, message: "Wallet fetched successfully"}
            }
            } catch (error) {
              throw new HttpException(error.message, 500);
            }
        }

        async  getWallet(userId: number) {
            
            try {
                if (userId != null) {
                    const wallets = await this.walletRepository.find({
                        relations: {
                          user: true,
                        },
                        where: {
                          user: {
                            id: userId,
                          },
                        },
                      });
                    let balance = wallets.reduce((totalBalance,wallet) => totalBalance + wallet.balance, 0)
                    
                    return {data:{wallets, balance}, message : "wallets fetched successfully"}
                }
              } catch (error) {
                throw new HttpException(error.message, 500);
              }
        }
        
}
