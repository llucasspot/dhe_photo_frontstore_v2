import { singleton } from '#di';
import { PhotographerSlugGetterPort } from '#features/auth/domain';

@singleton()
export class PhotographerSlugGetterBrowserAdapter
  implements PhotographerSlugGetterPort
{
  get(): string {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    if (parts.length === 1) {
      throw new Error();
    }
    return parts[0];
  }
}
