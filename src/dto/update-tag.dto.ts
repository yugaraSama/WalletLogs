import { PartialType } from '@nestjs/swagger';
import { CreateTagDto } from './create-tag.dto';
import { Expose } from 'class-transformer';
import { IsDate, IsString, IsUUID } from 'class-validator';

export class UpdateTagDto extends PartialType(CreateTagDto) {
  @IsUUID('all')
  @Expose()
  id: string;

  @IsString()
  @Expose()
  libelle: string;

  @Expose()
  @IsDate()
  updatedAt: Date;
}
