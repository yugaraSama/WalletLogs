import { Expose } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateTagDto {
  @IsString()
  @Expose()
  libelle: string;

  @IsDate()
  createdAt: Date;
}
