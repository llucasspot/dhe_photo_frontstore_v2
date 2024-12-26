import { AuthI18nTranslationsKeys } from '../auth.i18n-translations-keys';

export const enAuth: AuthI18nTranslationsKeys = {
  signIn: {
    title: 'Welcome back',
    subtitle: 'Sign in with a student code.',
    email: 'Email',
    studentCode: 'Student code',
    submit: 'Sign In',
    gcu: 'Terms and Conditions',
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
