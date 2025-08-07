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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  DocumentBuilder,
} from '@nestjs/swagger';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  config = new DocumentBuilder()
    .addGlobalResponse({
      status: 400,
      description: 'Bad Request -> Invalid request format or data types',
    })
    .addGlobalResponse({
      status: 401,
      description: 'Unauthorized -> Please log in to access this resource',
    })
    .addGlobalResponse({
      status: 500,
      description: 'Internal Server Error -> An unexpected error occurred',
    })
    .addGlobalResponse({
      status: 502,
      description: 'Bad Gateway -> Please try again later',
    })
    .addGlobalResponse({
      status: 503,
      description: 'Service Unavailable -> Please try again later',
    })
    .build();

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
