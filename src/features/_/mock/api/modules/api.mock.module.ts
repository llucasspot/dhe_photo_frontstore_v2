import { DatabaseModule } from '../../database/modules/database.module';

import { AuthApiMockModule } from './auth/auth.api.mock.module';
import { StudentsMockApiModule } from './students/students.mock.api.module';

import { Module } from '#di';

@Module({
  imports: [DatabaseModule, AuthApiMockModule, StudentsMockApiModule],
})
export class ApiMockModule {}
