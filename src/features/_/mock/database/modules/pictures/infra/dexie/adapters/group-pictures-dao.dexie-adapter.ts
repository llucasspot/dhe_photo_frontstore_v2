import {
  DaoDexie,
  DatabaseServiceDexieAdapter,
} from '../../../../../infra/dexie';
import { GroupPicturesDaoPort } from '../../../domain/group-pictures-dao.port';

import { inject, singleton } from '#di';

@singleton()
export class GroupPicturesDaoDexieAdapter
  extends DaoDexie<'groupPictures'>
  implements GroupPicturesDaoPort
{
  constructor(
    @inject(DatabaseServiceDexieAdapter)
    databaseService: DatabaseServiceDexieAdapter,
  ) {
    super(databaseService, 'groupPictures');
  }
}
