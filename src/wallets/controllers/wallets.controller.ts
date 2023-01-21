import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    HttpCode,
    } from '@nestjs/common';
import {
        ApiOkResponse,
        ApiOperation,
      } from '@nestjs/swagger';
import { WalletsService } from '../services/wallets.service';
import { CreateWalletDto } from '../dtos/wallets.dtos';

    

    @Controller('/:userId')
    export class WalletsController {
    usersService: any;
    constructor(private readonly walletService: WalletsService) {}
    
    @Get('/wallet-profile')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ status: HttpStatus.CREATED })
    @ApiOperation({ summary: 'show all wallets related to a user' })
    async getWallets(@Param('userId') userId: number) {
    return await this.walletService.getWallet(userId);
    }
   
    @Post('/create-wallet')
    @HttpCode(201)
    @ApiOkResponse({ status: HttpStatus.CREATED })
    @ApiOperation({ summary: 'create a wallet' })
    async createWallet(@Param('userId') userId: number,@Body() dto: CreateWalletDto,) {
        return this.walletService.createWallet(userId, dto);
     }

    @Get('/wallets/:walletId')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ status: HttpStatus.CREATED })
    @ApiOperation({ summary: 'show a single wallet' })
    getWalletById(@Param('userId') userId: number, @Param('walletId') walletId: number,) {
    return this.walletService.getWalletById(userId, walletId);
  }

}
