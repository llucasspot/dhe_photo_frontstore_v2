import { useTranslation } from 'react-i18next';

import { classNames } from '#core/react';
import { StudentDto } from '#features/students/domain';
import { Link } from '#routing/react';

type HomeContentProps = { students: StudentDto[] };

export const HomeContent = ({ students }: HomeContentProps) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-1 gap-4',
        'sm:grid-cols-2',
        'md:grid-cols-3',
        'lg:grid-cols-4',
      )}
    >
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};

const StudentCard = ({ student }: { student: StudentDto }) => {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <div>
        <h2 className="font-roboto text-[#633d81] text-lg font-bold mb-2 text-center">
          {student.klass?.name}
        </h2>
        <p className="font-roboto text-[#666666] text-lg font-normal text-center">
          {student.klass?.project?.school?.name}
        </p>
      </div>
      <hr className="border-[#633d81] w-[4.5vw] mt-[2vh] mb-[2vh] mx-auto" />
      <h2 className="font-roboto text-[#633d81] text-lg uppercase font-normal my-[19px] text-center">
        {t('home.navbar.portrait-picture-section.title')}
      </h2>
      <Link to="/students/$studentCode" params={{ studentCode: student.code }}>
        <div
          className={classNames(
            'max-w-[80vw] shadow-[0_0_5px_rgba(1,1,1,0.2)] bg-white p-2 relative',
            'sm:mr-0',
            'md:max-w-[90vw]',
          )}
        >
          <div className="relative">
            <img
              className={classNames(
                'max-h-[325px] max-w-[90vw] w-auto h-auto',
                'hover:opacity-100',
                'sm:w-full sm:max-h-[unset]',
              )}
              src={student.getPictureUrl()}
            />
            <div
              className={classNames(
                'w-full h-full flex justify-center items-center transition-opacity duration-500 ease-in-out bg-[rgba(73,197,127,0.73)] absolute top-[0px] p-0 opacity-0',
                'hover:opacity-100',
              )}
            >
              <span className="text-center font-semibold font-['Roboto','Helvetica Neue',sans-serif] block leading-[1] text-white">
                {t('home.studentCard.over')}
                <br />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
