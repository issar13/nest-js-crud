import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TransactionService } from '../services/transactions.service';
import { AddTransactionDto } from '../dtos/transaction.dtos';
import { HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('/transactions')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    // POST request to add a new transaction
    @Post(':walletId')
    @HttpCode(201)
    @ApiOkResponse({ status: HttpStatus.CREATED })
    @ApiOperation({ summary: 'create transaction' })
    async addTransaction(@Param('walletId') walletId: number, @Body() data: AddTransactionDto) {
        return await this.transactionService.addTransaction(walletId, data);
    }
}
