import { inject, singleton } from '#di';
import { PhotographerSlugGetterPort } from '#features/auth/domain';
import { StudentsGetterControllerServicePort } from '#features/students/domain';
import { StudentDto } from '#features/students/domain';
import { StorageService } from '#storage/domain';

@singleton()
export class HomeService {
  constructor(
    @inject(StudentsGetterControllerServicePort)
    private readonly studentsGetterControllerService: StudentsGetterControllerServicePort,
    @inject(PhotographerSlugGetterPort)
    private readonly photographerSlugGetter: PhotographerSlugGetterPort,
    @inject(StorageService)
    private readonly storageService: StorageService,
  ) {}

  async getStudents(): Promise<StudentDto[]> {
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

  async addStudentCode(studentCode: string): Promise<void> {
    const photographerSlug = this.photographerSlugGetter.get();
    await this.studentsGetterControllerService.getStudentByCode({
      photographerSlug,
      studentCode,
    });
    const studentCodes = this.storageService.get(StorageService.studentCodes);
    const newStudentCodes = [...studentCodes, studentCode];
    this.storageService.set(StorageService.studentCodes, newStudentCodes);
  }
}
