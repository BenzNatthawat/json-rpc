import { BadGatewayException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AutomationService {

  async onOff(data: any, api?: string) {
    try {
      return await axios.post(api ? api : process.env.SCHNIDER_API, data)
    } catch (error) {
      throw new BadGatewayException({
        data: {
          url: error?.config?.url,
          data: error?.config?.data
        }
      })
    }
  }

  async devices(data: any, api?: string) {
    try {
      return await axios.post(api ? api : process.env.SCHNIDER_API, data)
    } catch (error) {
      throw new BadGatewayException({
        data: {
          url: error?.config?.url,
          data: error?.config?.data
        }
      })
    }
  }

}
