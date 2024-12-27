import { HomeI18nTranslationsKeys } from '../home.i18n-translations-keys.ts';

export const frHome: HomeI18nTranslationsKeys = {
  navbar: {
    menu: {
      openMain: 'Ouvrir le menu principal',
    },
    input: {
      studentCode: {
        placeholder: 'Entrez un autre code étudiant.',
      },
    },
    notifications: {
      view: 'Voir les notifications',
    },
    profile: {
      view: 'Votre profil',
    },
  },
} as const;
