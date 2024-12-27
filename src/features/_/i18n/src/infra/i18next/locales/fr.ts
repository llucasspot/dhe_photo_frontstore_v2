import { frAuth } from '#features/auth/i18n';
import { frHome } from '#features/home/i18n';
import { Translations } from '#i18n/domain';

export const fr: Translations = {
  auth: frAuth,
  home: frHome,
} as const;
