import { enAuth } from '#features/auth/i18n';
import { enHome } from '#features/home/i18n';
import { Translations } from '#i18n/domain';

export const en: Translations = {
  auth: enAuth,
  home: enHome,
} as const;
