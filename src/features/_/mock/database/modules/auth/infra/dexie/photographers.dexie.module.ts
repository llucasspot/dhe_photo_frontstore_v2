import { DatabaseDexieModule } from '../../../../infra/dexie/database.dexie.module';
import { CustomersDaoPort } from '../../domain/customers-dao.port.ts';
import { PhotographersDaoPort } from '../../domain/photographers-dao.port';

import { CustomersDaoDexieAdapter } from './adapters/customers-dao.dexie-adapter.ts';
import { PhotographersDaoDexieAdapter } from './adapters/photographers-dao.dexie-adapter';

import { Module } from '#di';

@Module({
  imports: [DatabaseDexieModule],
  providers: [
    {
      token: PhotographersDaoPort,
      useToken: PhotographersDaoDexieAdapter,
    },
    {
      token: CustomersDaoPort,
      useToken: CustomersDaoDexieAdapter,
    },
  ],
})
export class PhotographersDexieModule {}
