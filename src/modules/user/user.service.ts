import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    return await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        ...createUserDto,
        createdAt: new Date(),
      },
    });
  }

  async findAll() {
    return await prisma.user.findMany();
  }

  async findOne(id: string) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: string) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}
