import { DtoByTableName, Finder, Populator } from '../../../../database/domain';

export class StudentFinder {
  private finder: Finder<
    DtoByTableName,
    'students',
    DtoByTableName['students'],
    ''
  >;

  constructor() {
    this.finder = new Finder('students');
  }

  public build() {
    return this.finder
      .populateWith(
        'klassId',
        Populator.builder('klass', 'klasses')
          .populateWith(
            'projectId',
            Populator.builder('project', 'projects')
              .populateWith(
                'schoolId',
                Populator.builder('school', 'schools').build(),
              )
              .build(),
          )
          .populateManyWith(
            'klassId',
            Populator.builder('photos', 'groupPictures')
              .populateWith(
                'pictureId',
                Populator.builder('picture', 'pictures').build(),
              )
              .build(),
          )
          .build(),
      )
      .populateManyWith(
        'studentId',
        Populator.builder('photos', 'studentPictures')
          .populateWith(
            'pictureId',
            Populator.builder('picture', 'pictures').build(),
          )
          .build(),
      );
  }

  public filterByStudentCodes(studentCodes: string[]) {
    this.finder = this.finder.filtersWith(['code', '$in', studentCodes]);
    return this;
  }

  public filterByStudentId(studentId: string) {
    this.finder = this.finder.filtersWith(['id', '$equals', studentId]);
    return this;
  }

  public filterByStudentCode(studentCode: string) {
    this.finder = this.finder.filtersWith(['code', '$equals', studentCode]);
    return this;
  }
}
