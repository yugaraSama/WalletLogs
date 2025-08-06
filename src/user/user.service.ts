import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [];

  createUser(userDto: UserDto): UserDto {
    this.users.push(userDto);
    return userDto;
  }
}
