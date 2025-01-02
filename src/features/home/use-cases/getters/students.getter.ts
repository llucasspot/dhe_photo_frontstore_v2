import { Getter } from '#action/domain';
import { inject, singleton } from '#di';
import { PhotographerSlugGetterPort } from '#features/auth/domain';
import {
  StudentDto,
  StudentsGetterControllerServicePort,
} from '#features/students/domain';
import { StorageService } from '#storage/domain';

export const studentsKeys = {
  all: ['students'] as const,
  lists: () => [...studentsKeys.all, 'list'] as const,
  list: (filters: string) => [...studentsKeys.lists(), { filters }] as const,
  details: () => [...studentsKeys.all, 'detail'] as const,
  detail: (id: string) => [...studentsKeys.details(), id] as const,
};

@singleton()
export class StudentsGetter extends Getter<
  ReturnType<typeof studentsKeys.lists>,
  StudentDto[],
  []
> {
  constructor(
    @inject(StudentsGetterControllerServicePort)
    private readonly studentsGetterControllerService: StudentsGetterControllerServicePort,
    @inject(PhotographerSlugGetterPort)
    private readonly photographerSlugGetter: PhotographerSlugGetterPort,
    @inject(StorageService)
    private readonly storageService: StorageService,
  ) {
    super(() => studentsKeys.lists());
  }

  get() {
    const photographerSlug = this.photographerSlugGetter.get();
    const studentCodes = this.storageService.get(StorageService.studentCodes);
    if (!studentCodes) {
      return [];
    }
    return this.studentsGetterControllerService.getStudentsByCodes({
      photographerSlug,
      studentCodes,
    });
  }
}
