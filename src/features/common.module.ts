import { I18nModule } from './_/i18n/i18n.module';

import { CacheModule } from '#cache';
import { Module } from '#di';
import { RoutingModule } from '#routing';
import { ToastModule } from '#toast';

@Module({
  imports: [RoutingModule, I18nModule, ToastModule, CacheModule],
  providers: [],
})
export class CommonModule {}
