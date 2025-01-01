import { HomeContent, HomeHeader } from '../components';

import { useGetter } from '#action/react';
import { StudentsGetter } from '#features/home/use-cases';

export const HomePage = () => {
  const { data: students } = useGetter(StudentsGetter);

  return (
    <div>
      <HomeHeader />
      {students && <HomeContent students={students} />}
    </div>
  );
};
