import { ApiProperty } from '@nestjs/swagger'

export class DeviceListsDto {
  @ApiProperty()
  totalNumber: number

  @ApiProperty()
  dmrDevObjList: string[]
}
