import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

import pictureUrl from '../../../../mokes/Photographe-portrait-deleve-ecole-ingenieur-Sophia-Antipolis-4.jpg';

import type {
  AvailableMediaType,
  AvailableMediaTypeName,
} from './beans/media-types';
import { availableMediaTypes, mediaTypes } from './beans/media-types';
import type { AvailablePictureFormatName } from './beans/picture-formats';
import { availablePictureFormats } from './beans/picture-formats';
import { HavePictures } from './beans';

import { Expose, Type } from '#class-transformer';
import { Dto } from '#core/domain';

export class StudentDto extends HavePictures<StudentDto> {
  id!: string;
  code!: string;
  @Expose()
  klassId!: string;
  @IsOptional()
  klass?: StudentKlassDto;

  getPictureUrl() {
    // TODO
    return this.photoIds[0] ? pictureUrl : undefined;
  }
}

export class StudentKlassDto extends HavePictures<StudentKlassDto> {
  @IsString()
  id!: string;

  @IsString()
  name!: string;
  projectId!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => KlassProjectDto)
  project?: KlassProjectDto;
}

export class KlassProjectDto extends Dto<KlassProjectDto> {
  id!: string;
  schoolId!: string;
  name!: string;
  shotDate!: Date;
  orderEndDate!: Date;
  @IsOptional()
  messageForClients?: string;
  @IsOptional()
  school?: ProjectSchoolDto;
  products: ProjectProductDto[] = [];

  get productIds(): string[] {
    return this.products.map((product) => product.id);
  }
}

export enum AvailableCurrency {
  EUR = 'EUR',
}

export class ProjectSchoolDto extends Dto<ProjectSchoolDto> {
  static availableCurrencyOptions = [
    { value: AvailableCurrency.EUR, label: AvailableCurrency.EUR },
  ] as const satisfies { value: AvailableCurrency; label: AvailableCurrency }[];
  id!: string;
  name!: string;
  currency!: AvailableCurrency;
  city!: string;
}

export class ProjectProductDto extends Dto<ProjectProductDto> {
  @IsString()
  id!: string;

  @IsString()
  projectId!: string;

  @IsString()
  productId!: string;

  @Min(0)
  @IsNumber()
  @Type(() => Number)
  price!: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductDto)
  product?: ProductDto;
}

export class ProductDto extends Dto<ProductDto> {
  @IsString({ message: 'products.fields.id.IsString' })
  id!: string;

  @IsString({ message: 'products.fields.name.IsString' })
  name!: string;

  @IsString({ message: 'products.fields.description.IsString' })
  description!: string;

  @IsEnum(Object.keys(availableMediaTypes), {
    message: 'products.fields.mediaTypeName.IsEnum',
  })
  mediaTypeName!: AvailableMediaTypeName;
  @IsEnum(Object.keys(availablePictureFormats), {
    message: 'products.fields.pictureFormatName.IsEnum',
  })
  pictureFormatName!: AvailablePictureFormatName;

  getMediaType(): AvailableMediaType {
    return mediaTypes[this.mediaTypeName];
  }

  getPictureFormat() {
    return availablePictureFormats[this.pictureFormatName];
  }
}
