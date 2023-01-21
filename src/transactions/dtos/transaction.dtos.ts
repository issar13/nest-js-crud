import { IsNumber, IsString, IsEnum } from 'class-validator';

export class AddTransactionDto {
  @IsEnum(['income', 'expense'])
    type: 'income' | 'expense';

  @IsNumber()
  amount: number;

  @IsString()
  description: string;
}
