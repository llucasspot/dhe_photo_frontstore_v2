import { useRef } from 'react';

import { useAction } from '#action/react';
import { AddStudentByCodeAction } from '#features/home/domain';
import { useI18n } from '#i18n/react';

export const AddStudentByCodeInput = () => {
  const { t } = useI18n();
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate: addStudentByCode } = useAction(AddStudentByCodeAction);

  const onAdd = (studentCode: string) => {
    addStudentByCode({ studentCode });
  };

  const handleAdd = () => {
    if (inputRef.current) {
      onAdd(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div className="flex items-center flex-1 max-w-md mx-4 gap-2">
      <input
        ref={inputRef}
        type="text"
        className="block w-full rounded-lg border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={t('home.navbar.input.studentCode.placeholder')}
      />
      <button
        type="button"
        onClick={handleAdd}
        className="flex-shrink-0 rounded-lg p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};
