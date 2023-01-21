import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";


export class CreateWalletDto {

  @ApiProperty()
  @IsNotEmpty()
  balance: number;

  @ApiProperty()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: 'Wallet Name',
    required: true,
  })
  @IsNotEmpty()
  walletName: string;
}
