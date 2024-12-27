import { AddStudentCodeInput } from '../components/add-student-code.input.tsx';

import { useI18n } from '#i18n/react';

export const HomePage = () => {
  const { t } = useI18n();

  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 lg:hidden"
          >
            <span className="sr-only">{t('home.navbar.menu.openMain')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        <AddStudentCodeInput
          onAdd={(studentCode) => {
            console.log(studentCode);
          }}
        />

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded-full p-1.5 text-gray-500 hover:text-gray-600"
          >
            <span className="sr-only">
              {t('home.navbar.notifications.view')}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </button>
          <a
            href="#"
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100"
          >
            <span className="sr-only">{t('home.navbar.profile.view')}</span>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="h-8 w-8 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
