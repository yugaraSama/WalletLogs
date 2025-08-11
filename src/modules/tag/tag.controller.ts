import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from '../../dto/create-tag.dto';
import { UpdateTagDto } from '../../dto/update-tag.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

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
    type: [CreateTagDto],
  })
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Tag found by ID',
    type: UpdateTagDto,
  })
  findOne(@Param('id') id: string) {
    return this.tagService.findOne(+id);
  }

  @Get(':libelle')
  @ApiOkResponse({
    description: 'Tag found by libelle',
    type: [UpdateTagDto],
  })
  findByLibelle(@Param('libelle') libelle: string) {
    return this.tagService.findByLibelle(libelle);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Tag updated successfully',
    type: UpdateTagDto,
  })
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagService.update(+id, updateTagDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Tag removed successfully',
    type: Number,
  })
  remove(@Param('id') id: string) {
    return this.tagService.remove(+id);
  }
}
