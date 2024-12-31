import {
  DaoDexie,
  DatabaseServiceDexieAdapter,
} from '../../../../../infra/dexie';
import { ProductsDaoPort } from '../../../domain/products-dao.port';

import { inject, singleton } from '#di';

@singleton()
export class ProductsDaoDexieAdapter
  extends DaoDexie<'products'>
  implements ProductsDaoPort
{
  constructor(
    @inject(DatabaseServiceDexieAdapter)
    databaseService: DatabaseServiceDexieAdapter,
  ) {
    super(databaseService, 'products');
  }
}
