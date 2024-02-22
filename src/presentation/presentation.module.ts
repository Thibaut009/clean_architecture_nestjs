import { Module } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { ClientsController } from './clients/clients.controller';
import { GetAllClientsUsecase } from '../domain/usecases/clients/get_all_clients.usecase';

@Module({
  imports: [DomainModule],
  controllers: [ClientsController],
  providers: [GetAllClientsUsecase]
})
export class PresentationModule {}
