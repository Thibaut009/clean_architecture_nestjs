import { Module } from '@nestjs/common';
import { GetAllClientsUsecase } from './usecases/clients/get_all_clients.usecase';

@Module({
  providers: [GetAllClientsUsecase]
})
export class DomainModule {}
