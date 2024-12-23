import { Dao, DtoByTableName } from '../../../domain';

export abstract class CustomersDaoPort extends Dao<
  DtoByTableName,
  'customers'
> {}
