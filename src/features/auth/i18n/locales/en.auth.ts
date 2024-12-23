import { AuthI18nTranslationsKeys } from '../auth.i18n-translations-keys';

export const enAuth: AuthI18nTranslationsKeys = {
  signIn: {
    title: 'Welcome back',
    subtitle: 'Please sign in to your account',
    email: 'Email',
    studentCode: 'Student code',
    submit: 'Sign In',
    validation: {
      email: {
        IsEmail: 'Invalid email address',
        IsNotEmpty: 'Email is required',
      },
      photographerSlug: {
        IsNotEmpty: 'Photographer name is required',
      },
      studentCode: {
        IsString: 'Password must be text',
        IsNotEmpty: 'Password is required',
      },
    },
  },
} as const;
