import { StorageServiceLocalStorageAdapter } from '../infra/local-storage/storage.service.local-storage-adapter.ts';

import { Module } from '#di';
import { StorageServicePort } from '#storage/domain';

@Module({
  providers: [
    {
      token: StorageServicePort,
      useToken: StorageServiceLocalStorageAdapter,
    },
  ],
})
export class StorageModule {}
