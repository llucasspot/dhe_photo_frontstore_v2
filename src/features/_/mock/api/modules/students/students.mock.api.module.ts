import { StudentsGetterMockAdapter } from './infra/students.getter.mock-adapter';

import { Module } from '#di';
import { StudentsGetterControllerServicePort } from '#features/students/domain';

@Module({
  providers: [
    {
      token: StudentsGetterControllerServicePort,
      useToken: StudentsGetterMockAdapter,
    },
  ],
})
export class StudentsMockApiModule {}
