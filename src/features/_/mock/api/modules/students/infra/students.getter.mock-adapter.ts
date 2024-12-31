import { PopulateManyWith, PopulateWith } from '../../../../database/domain';
import {
  GroupPicture,
  Klass,
  Picture,
  Project,
  School,
  Student,
  StudentPicture,
} from '../../../../database/domain/dao/tables';
import { StudentsDaoPort } from '../../../../database/modules/students/domain/students-dao.port';
import { ForMockControllerService } from '../../../domain/for-mock-controller-service';

import { StudentFinder } from './student.finder';

import { plainToInstance } from '#class-transformer';
import { LogAction } from '#core/domain';
import { inject, singleton } from '#di';
import {
  GetStudentByCodeBody,
  GetStudentsByCodesBody,
  StudentDto,
  StudentsGetterControllerServicePort,
} from '#features/students/domain';

@singleton()
export class StudentsGetterMockAdapter
  extends ForMockControllerService
  implements StudentsGetterControllerServicePort
{
  constructor(
    @inject(StudentsDaoPort)
    private readonly studentsDao: StudentsDaoPort,
  ) {
    super();
  }

  @LogAction()
  async getStudentsByCodes(
    body: GetStudentsByCodesBody,
  ): Promise<StudentDto[]> {
    await this.delay();
    const students = await this.studentsDao.getAll(
      new StudentFinder().filterByStudentCodes(body.studentCodes).build(),
    );
    return students.map((student) => this.map(student));
  }

  @LogAction()
  async getStudentByCode(body: GetStudentByCodeBody): Promise<StudentDto> {
    await this.delay();
    const student = await this.studentsDao.get(
      new StudentFinder().filterByStudentCode(body.studentCode).build(),
    );
    if (!student) {
      throw new Error('Student not found');
    }
    return this.map(student);
  }

  @LogAction()
  async getStudent(studentId: string): Promise<StudentDto> {
    await this.delay();
    const student = await this.studentsDao.get(
      new StudentFinder().filterByStudentId(studentId).build(),
    );
    if (!student) {
      throw new Error('Student not found');
    }
    return this.map(student);
  }

  private map(
    student: PopulateManyWith<
      PopulateWith<
        Student,
        PopulateManyWith<
          Klass & {
            project?: Project & { school?: School };
          },
          GroupPicture & { picture?: Picture },
          'photos'
        >,
        'klass'
      >,
      StudentPicture & {
        picture?: Picture;
      },
      'photos'
    >,
  ) {
    return plainToInstance(StudentDto, student);
  }
}
