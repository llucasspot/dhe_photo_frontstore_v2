import { HomeContent, HomeHeader } from '../components';

import { useQuery } from '#action/react';
import { StudentsGetter } from '#features/home/domain';

export const HomePage = () => {
  const { data: students } = useQuery(StudentsGetter);

  return (
    <div>
      <HomeHeader />
      {students && <HomeContent students={students} />}
    </div>
  );
};
