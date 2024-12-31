import {
  GetStudentByCodeBody,
  GetStudentsByCodesBody,
  StudentDto,
} from '../dtos';

export abstract class StudentsGetterControllerServicePort {
  abstract getStudentsByCodes(
    body: GetStudentsByCodesBody,
  ): Promise<StudentDto[]>;

  abstract getStudentByCode(body: GetStudentByCodeBody): Promise<StudentDto>;

  abstract getStudent(studentId: string): Promise<StudentDto>;
}
