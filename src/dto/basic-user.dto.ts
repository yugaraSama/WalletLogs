import { IsEmail } from 'class-validator';
import { Expose } from 'class-transformer';

// what is transfered
export class BasicUserDto {
  @Expose()
  id: string;

  @IsEmail()
  email: string;

  @Expose()
  surname: string;

  @Expose()
  name: string;

  @Expose()
  username: string;
}
