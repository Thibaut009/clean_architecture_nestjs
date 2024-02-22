import { Injectable } from '@nestjs/common';
import { ClientsMocks } from '../../../data/mocks/clients/clients.mocks';

@Injectable()
export class GetAllClientsUsecase {

  constructor(private clientsMock: ClientsMocks) {
  }

  execute() {
    return this.clientsMock.getAllClients();
  }
}
