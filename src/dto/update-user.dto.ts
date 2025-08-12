import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  email: string;

  @Expose()
  surname: string;

  @Expose()
  name: string;

  @Expose()
  username: string;
}
