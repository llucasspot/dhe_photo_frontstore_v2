import { studentsKeys } from '../getters';

import { Action } from '#action/domain';
import { CacheServicePort } from '#cache/domain';
import { inject, singleton } from '#di';
import { PhotographerSlugGetterPort } from '#features/auth/domain';
import { StudentsGetterControllerServicePort } from '#features/students/domain';
import { StorageService } from '#storage/domain';

@singleton()
export class AddStudentByCodeAction extends Action<
  void,
  {
    studentCode: string;
  }
> {
  constructor(
    @inject(StudentsGetterControllerServicePort)
    private readonly studentsGetterControllerService: StudentsGetterControllerServicePort,
    @inject(PhotographerSlugGetterPort)
    private readonly photographerSlugGetter: PhotographerSlugGetterPort,
    @inject(StorageService)
    private readonly storageService: StorageService,
    @inject(CacheServicePort)
    private readonly cacheService: CacheServicePort,
  ) {
    super({
      success: 'students.add-student-code.success',
      pending: 'students.add-student-code.pending',
      error: 'students.add-student-code.error',
    });
  }

  async execute({ studentCode }: { studentCode: string }) {
    const photographerSlug = this.photographerSlugGetter.get();
    await this.studentsGetterControllerService.getStudentByCode({
      photographerSlug,
      studentCode,
    });
    const studentCodes = this.storageService.get(StorageService.studentCodes);
    const newStudentCodes = [...studentCodes, studentCode];
    this.storageService.set(StorageService.studentCodes, newStudentCodes);
  }

  onSuccess(): void {
    this.cacheService.revalidateTag(studentsKeys.lists());
  }
  onError(error: Error): void {
    console.error('Failed to add student code:', error);
  }
}
