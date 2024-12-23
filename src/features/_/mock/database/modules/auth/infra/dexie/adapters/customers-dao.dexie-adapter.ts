import {
  DaoDexie,
  DatabaseServiceDexieAdapter,
} from '../../../../../infra/dexie';
import { CustomersDaoPort } from '../../../domain/customers-dao.port.ts';

import { inject, singleton } from '#di';

@singleton()
export class CustomersDaoDexieAdapter
  extends DaoDexie<'customers'>
  implements CustomersDaoPort
{
  constructor(
    @inject(DatabaseServiceDexieAdapter)
    databaseService: DatabaseServiceDexieAdapter,
  ) {
    super(databaseService, 'customers');
  }
}
