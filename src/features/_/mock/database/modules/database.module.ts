import { AuthDatabaseModule } from './auth/auth.database.module';

import { Module } from '#di';

@Module({
  imports: [AuthDatabaseModule],
})
export class DatabaseModule {}
