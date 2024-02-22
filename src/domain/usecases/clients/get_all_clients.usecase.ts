import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllClientsUsecase {
  execute() {
    return "All CLIENTS FROM USECASE"
  }
}
