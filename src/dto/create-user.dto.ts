import { IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';

// what is transfered
export class CreateUserDto {
  @IsUUID('all')
  @Expose()
  id: string;
}
