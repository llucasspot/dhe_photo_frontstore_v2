import { BrowserStorageServicePort } from '../../domain/browser-storage.service.port';

import { singleton } from '#di';

@singleton()
export class BrowserStorageServiceLocalStorageAdapter
  implements BrowserStorageServicePort
{
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, newValue: string): void {
    return localStorage.setItem(key, newValue);
  }

  remove(key: string): void {
    return localStorage.removeItem(key);
  }
}
