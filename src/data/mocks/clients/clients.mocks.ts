import { Injectable } from '@nestjs/common';
import { Client } from '../../../domain/models/client';

@Injectable()
export class ClientsMocks {

  getAllClients() {
    return [
      new Client("aaa", "bbb"),
      new Client("ccc", "ddd")
    ]
  }
}
