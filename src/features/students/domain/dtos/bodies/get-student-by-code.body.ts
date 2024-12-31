import { Dto } from '#core/domain';

export class GetStudentByCodeBody extends Dto<GetStudentByCodeBody> {
  photographerSlug!: string;
  studentCode!: string;
}
