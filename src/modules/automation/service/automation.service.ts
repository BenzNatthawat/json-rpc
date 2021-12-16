import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AutomationService {

  async onOff(data: any) {
    console.log(process.env.SCHNIDER_API)
    return await axios.post(process.env.SCHNIDER_API, data)
  }

  async devices(data: any) {
    console.log(process.env.SCHNIDER_API)
    return await axios.post(process.env.SCHNIDER_API, data)
  }

}
