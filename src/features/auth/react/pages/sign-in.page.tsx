import { SignInForm } from '../components';

import { useI18n } from '#i18n/react';

export const SignInPage = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm" />

      <div className="relative max-w-md w-full mx-4 bg-white rounded-xl shadow-2xl p-8 space-y-8">
        <div className="text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {t('auth.signIn.title')}
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            {t('auth.signIn.subtitle')}
          </p>
        </div>

        <div className="mt-8">
          <SignInForm />
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <button
            onClick={() => {
              // TODO
              console.log('open gcu');
            }}
            className="mt-2 hover:text-blue-600 transition-colors duration-200"
          >
            {t('auth.signIn.gcu')}
          </button>
        </div>
      </div>
    </div>
  );
};
