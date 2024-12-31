import { useQuery } from '@tanstack/react-query';

import { useService } from '#di/react';
import { HomeService } from '#features/home/domain';

export const studentsKeys = {
  all: ['students'] as const,
  lists: () => [...studentsKeys.all, 'list'] as const,
  list: (filters: string) => [...studentsKeys.lists(), { filters }] as const,
  details: () => [...studentsKeys.all, 'detail'] as const,
  detail: (id: string) => [...studentsKeys.details(), id] as const,
};

export const useStudents = () => {
  const homeService = useService(HomeService);

  return useQuery({
    queryKey: studentsKeys.lists(),
    queryFn: () => homeService.getStudents(),
  });
};
