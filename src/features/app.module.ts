import { AuthModule } from './auth/auth.module.ts';
import { CommonModule } from './common.module';

import { ApiModule } from '#api';
import { Module } from '#di';
import { StateModule } from '#state/modules';
import { StorageModule } from '#storage/modules';

@Module({
  imports: [ApiModule, CommonModule, StateModule, StorageModule, AuthModule],
})
export class AppModule {}
