import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser(): string {
    return 'User data';
  }

  @Post()
  createUser(@Body() userDto: UserDto) {
    const addedUser = this.userService.createUser(userDto);
    return addedUser;
  }
}
