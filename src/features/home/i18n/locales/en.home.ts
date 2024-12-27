import { HomeI18nTranslationsKeys } from '../home.i18n-translations-keys.ts';

export const enHome: HomeI18nTranslationsKeys = {
  navbar: {
    menu: {
      openMain: 'Open main menu',
    },
    input: {
      studentCode: {
        placeholder: 'Enter an other student code.',
      },
    },
    notifications: {
      view: 'View notifications',
    },
    profile: {
      view: 'Your profile',
    },
  },
} as const;
