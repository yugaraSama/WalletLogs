import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from '../../dto/create-tag.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { BasicTagDto } from 'src/dto/basic-tag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Tag created successfully',
    type: CreateTagDto,
  })
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of all tags',
    type: [BasicTagDto],
  })
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Tag found by ID',
    type: BasicTagDto,
  })
  findOne(@Param('id') id: string) {
    return this.tagService.findOne(id);
  }

  @Get(':libelle')
  @ApiOkResponse({
    description: 'Tag found by libelle',
    type: [BasicTagDto],
  })
  findByLibelle(@Param('libelle') libelle: string) {
    return this.tagService.findByLibelle(libelle);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Tag removed successfully',
    type: Number,
  })
  remove(@Param('id') id: string) {
    return this.tagService.remove(id);
  }
}
