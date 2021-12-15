import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AutomationService {

  async onOff(data: any) {
    return await axios.post('127.0.0.1:9090', data).then(response => response).catch(error => error);
  }

  async devices(data: any) {
    console.log(data)
    return await axios.post('127.0.0.1:9090', data).then(response => response).catch(error => error);
  }

}
