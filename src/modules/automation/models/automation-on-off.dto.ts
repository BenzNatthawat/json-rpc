import { ApiProperty } from '@nestjs/swagger'

export class AutomationOnOffDto {
  @ApiProperty({
    description: 'on:1, off:2',
    default: 1
  })
  onOff: number

  @ApiProperty({
    description: 'device Id',
    default: '10000'
  })
  deviceId: string
}
