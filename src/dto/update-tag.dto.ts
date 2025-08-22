import { PartialType } from '@nestjs/swagger';
import { CreateTagDto } from './create-tag.dto';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class UpdateTagDto extends PartialType(CreateTagDto) {
  @IsString()
  @Expose()
  libelle: string;
}
