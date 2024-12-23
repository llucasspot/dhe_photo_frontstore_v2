import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { Transform } from '#class-transformer';
import { Dto } from '#core/domain';

export class SignInBody extends Dto<SignInBody> {
  @IsEmail({}, { message: 'auth.signIn.validation.email.IsEmail' })
  @IsNotEmpty({ message: 'auth.signIn.validation.email.IsNotEmpty' })
  @Transform(({ value }) => value?.trim().toLowerCase())
  email!: string;

  @IsNotEmpty({ message: 'auth.signIn.validation.photographerSlug.IsNotEmpty' })
  @Transform(({ value }) => value?.trim().toLowerCase())
  photographerSlug!: string;

  @IsString({ message: 'auth.signIn.validation.password.IsString' })
  @IsNotEmpty({ message: 'auth.signIn.validation.password.IsNotEmpty' })
  studentCode!: string;
}
