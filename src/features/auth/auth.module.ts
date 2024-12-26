import { PhotographerSlugGetterDevAdapter } from './infra';

import { Module } from '#di';
import { PhotographerSlugGetterPort } from '#features/auth/domain';

@Module({
  providers: [
    {
      token: PhotographerSlugGetterPort,
      useToken: PhotographerSlugGetterDevAdapter,
    },
  ],
})
export class AuthModule {}
