import { singleton } from '#di';
import { PhotographerSlugGetterPort } from '#features/auth/domain';

@singleton()
export class PhotographerSlugGetterDevAdapter
  implements PhotographerSlugGetterPort
{
  get(): string {
    return 'dhe';
  }
}
