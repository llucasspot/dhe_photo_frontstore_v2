import { AuthI18nTranslationsKeys } from '../auth.i18n-translations-keys';

export const frAuth: AuthI18nTranslationsKeys = {
  signIn: {
    title: 'Bon retour',
    subtitle: 'Veuillez vous connecter à votre compte',
    email: 'Email',
    studentCode: 'Code étudiant',
    submit: 'Se connecter',
    validation: {
      email: {
        IsEmail: 'Adresse email invalide',
        IsNotEmpty: "L'email est requis",
      },
      photographerSlug: {
        IsNotEmpty: 'Le nom du photographer est requis',
      },
      studentCode: {
        IsString: 'Le mot de passe doit être du texte',
        IsNotEmpty: 'Le mot de passe est requis',
      },
    },
  },
} as const;
