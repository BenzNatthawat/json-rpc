import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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
  async onOff(@Body() automationOnOff: AutomationOnOffDto, @Query() query) { // DMR_EVT_OnOff
    const { onOff, deviceId } = automationOnOff
    const { api } = query

    const transId = this.Random(500)
    const res = await this.automationService.onOff(
      this.MakeObjectRpc('DMR_EVT_OnOff', transId, {
        devId: deviceId,
        onOff: onOff
      }), api)

    return res.data
  }

  @ApiResponse({
    status: 200,
    type: DeviceListsDto,
  })
  @Get('devices')
  async devices(@Query() query) { // DMR_DevList_Get
    const transId = this.Random(500)
    const { api } = query

    const res = await this.automationService.devices(
      this.MakeObjectRpc('DMR_DevList_Get', transId, {
        devType: 65535,
        startIndex: 1,
        maxItems: 10
      }), api)

    return res.data
  }
}
