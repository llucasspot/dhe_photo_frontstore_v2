import { HomeI18nTranslationsKeys } from '../home.i18n-translations-keys';

export const enHome: HomeI18nTranslationsKeys = {
  navbar: {
    'profile-button': {
      'profile-button': 'Your profile',
      'orders-button': 'Your orders',
      'sign-out-button': 'Sign out',
    },
    menu: {
      openMain: 'Open main menu',
    },
    input: {
      studentCode: {
        placeholder: 'Enter another student code.',
      },
    },
    notifications: {
      view: 'View notifications',
    },
    'portrait-picture-section': {
      title: 'Portrait picture',
    },
  },
  studentCard: {
    over: 'View student details',
  },
} as const;
