import { Expose } from 'class-transformer';
import { IsDate, IsString, IsUUID } from 'class-validator';

export class CreateTagDto {
  @IsUUID('all')
  @Expose()
  id: string;

  @IsString()
  @Expose()
  libelle: string;

  @IsDate()
  createdAt: Date;
}
