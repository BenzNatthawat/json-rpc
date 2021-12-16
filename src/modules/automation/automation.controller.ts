import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutomationService } from './service/automation.service';
import { AutomationOnOffDto } from './models/automation-on-off.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeviceListsDto } from './models/device-lists.dto';

@ApiTags('automation')
@Controller('automation')
export class AutomationController {
  constructor(private readonly automationService: AutomationService) { }

  MakeObjectRpc(method: string, transId: number, params: any) {
    return {
      rpcVer: "3.0",
      method: method,
      params: params,
      transId: transId
    }
  }

  Random(number: number) {
    return Math.floor(Math.random() * number);
  }

  @Post('on-off')
  async onOff(@Body() automationOnOff: AutomationOnOffDto) { // DMR_EVT_OnOff
    const { onOff, deviceId } = automationOnOff

    const transId = this.Random(500)
    const res = await this.automationService.onOff(
      this.MakeObjectRpc('DMR_EVT_OnOff', transId, {
        devId: deviceId,
        onOff: onOff
      }))
    return res.data
  }

  @ApiResponse({
    status: 200,
    type: DeviceListsDto,
  })
  @Get('devices')
  async devices() { // DMR_DevList_Get
    const transId = this.Random(500)

    const res = await this.automationService.devices(
      this.MakeObjectRpc('DMR_DevList_Get', transId, {
        devType: 65535,
        startIndex: 1,
        maxItems: 10
      }))
    return res.data
  }
}
