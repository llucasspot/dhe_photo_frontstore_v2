import { StudentDto } from '#features/students/domain';

export abstract class StudentsApiService {
  abstract getStudents(studentCodes: string[]): StudentDto[];
}
