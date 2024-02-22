import { Module } from '@nestjs/common';
import { ClientsMocks } from '../data/mocks/clients/clients.mocks';
import { DataModule } from '../data/data.module';

@Module({
  imports: [DataModule],
  providers: [ClientsMocks],
  exports: [ClientsMocks]
})
export class DomainModule {}
