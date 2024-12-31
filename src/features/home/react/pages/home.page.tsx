import { HomeContent, HomeHeader } from '../components';

import { useStudents } from '#features/students/react';

export const HomePage = () => {
  const { data: students } = useStudents();

  return (
    <div>
      <HomeHeader />
      {students && <HomeContent students={students} />}
    </div>
  );
};
