import { Module } from '@nestjs/common';
import { ClientsMocks } from './mocks/clients/clients.mocks';

@Module({
  providers: [ClientsMocks]
})
export class DataModule {}
