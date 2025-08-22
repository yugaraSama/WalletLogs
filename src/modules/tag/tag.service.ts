import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../../dto/create-tag.dto';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class TagService {
  async create(createTagDto: CreateTagDto) {
    return await prisma.tag.create({
      data: {
        id: crypto.randomUUID(),
        ...createTagDto,
        createAt: new Date(),
      },
    });
  }

  async findAll() {
    return await prisma.tag.findMany();
  }

  async findOne(id: string) {
    return await prisma.tag.findUnique({
      where: { id },
    });
  }

  async findByLibelle(libelle: string) {
    return await prisma.tag.findFirst({
      where: { libelle },
    });
  }

  async remove(id: string) {
    return await prisma.tag.delete({
      where: { id },
    });
  }
}
