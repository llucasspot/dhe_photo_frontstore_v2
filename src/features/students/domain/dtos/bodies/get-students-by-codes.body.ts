import { Dto } from '#core/domain';

export class GetStudentsByCodesBody extends Dto<GetStudentsByCodesBody> {
  photographerSlug!: string;
  studentCodes!: string[];
}
