import { IsEmail, IsStrongPassword } from 'class-validator';
import { Expose } from 'class-transformer';

// what is transfered
export class CreateUserDto {
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

  @Expose()
  surname: string;

  @Expose()
  name: string;

  @Expose()
  username: string;

  @Expose()
  createdAt: Date;
}
