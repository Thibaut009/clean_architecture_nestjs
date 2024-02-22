import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsMocks {

  getAllClients() {
    return [
      new Client("aaa", "bbb"),
      new Client("ccc", "ddd")
    ]
  }
}
