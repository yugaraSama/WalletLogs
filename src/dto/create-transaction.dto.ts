import { Expose } from 'class-transformer';
import { IsDate, IsUUID } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID('all')
  @Expose()
  user: string;

  @Expose()
  amount: number;

  @Expose()
  type: string; // e.g., 'credit' or 'debit'

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  tags: string[];
}
