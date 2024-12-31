import { BrowserStorageServicePort } from '../domain/browser-storage.service.port';
import { BrowserStorageServiceLocalStorageAdapter } from '../infra/local-storage/browser-storage.service.local-storage-adapter';

import { Module } from '#di';

@Module({
  providers: [
    {
      token: BrowserStorageServicePort,
      useToken: BrowserStorageServiceLocalStorageAdapter,
    },
  ],
})
export class StorageModule {}
