import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useService } from '#di/react';
import { HomeService } from '#features/home/domain';
import { studentsKeys } from '#features/students/react';
import { ToastService } from '#toast/domain';

export const useAddStudentCode = () => {
  const queryClient = useQueryClient();
  const homeService = useService(HomeService);
  const toastService = useService(ToastService);

  return useMutation({
    mutationFn: async (data: string) => {
      return toastService.promise(() => homeService.addStudentCode(data), {
        pending: 'students.add-student-code.pending',
        success: 'students.add-student-code.success',
        error: 'students.add-student-code.error',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: studentsKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to add student code:', error);
    },
  });
};
