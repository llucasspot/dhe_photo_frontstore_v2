import { Getter } from '#action/domain';
import { inject, singleton } from '#di';
import { PhotographerSlugGetterPort } from '#features/auth/domain';
import {
  StudentDto,
  StudentsGetterControllerServicePort,
} from '#features/students/domain';
import { studentsKeys } from '#features/students/react';
import { StorageService } from '#storage/domain';

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
