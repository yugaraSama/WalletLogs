/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsStrongPassword, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';

// what is transfered
export class CreateUserDto {
  @IsUUID('all')
  @Expose()
  id: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @Expose()
  password: string;

  firstName: string;

  lastName: string;

  username: string;

  createdAt: Date;
}
