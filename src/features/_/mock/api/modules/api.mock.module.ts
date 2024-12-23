import { DatabaseModule } from '../../database/modules/database.module';

import { AuthApiMockModule } from './auth/auth.api.mock.module';

import { Module } from '#di';

@Module({
  imports: [DatabaseModule, AuthApiMockModule],
})
export class ApiMockModule {}
