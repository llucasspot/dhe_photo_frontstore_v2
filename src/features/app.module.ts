import {StateModule} from "#state/modules";
import {StorageModule} from "#storage/modules";
import { CommonModule } from './common.module';

import { ApiModule } from '#api';
import { Module } from '#di';

@Module({
  imports: [ApiModule, CommonModule, StateModule, StorageModule],
})
export class AppModule {}
