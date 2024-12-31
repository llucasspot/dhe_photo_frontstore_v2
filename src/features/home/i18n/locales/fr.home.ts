import { HomeI18nTranslationsKeys } from '../home.i18n-translations-keys';

export const frHome: HomeI18nTranslationsKeys = {
  navbar: {
    'profile-button': {
      'profile-button': 'Votre profile',
      'orders-button': 'Vos commandes',
      'sign-out-button': 'Se déconnecter',
    },
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
    'portrait-picture-section': {
      title: 'Photos de portrait',
    },
  },
  studentCard: {
    over: "Voir les détails de l'étudiant",
  },
} as const;
