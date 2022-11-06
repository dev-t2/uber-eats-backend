import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CustomService } from './custom/custom.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly customService: CustomService) {}

  @ApiOperation({ summary: 'Custom Module and Service POC API' })
  @Get()
  customModule() {
    return this.customService.log();
  }
}
