import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class BasicTagDto {
  @IsString()
  @Expose()
  libelle: string;
}
