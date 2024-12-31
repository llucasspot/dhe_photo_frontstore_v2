import { IsOptional, IsString, ValidateNested } from 'class-validator';

import { PictureDto } from './have-pictures';

import { Type } from '#class-transformer';

export class HavePicture {
  @IsString()
  pictureId!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PictureDto)
  picture?: PictureDto;
}
