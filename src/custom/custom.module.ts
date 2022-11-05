import { DynamicModule, Module } from '@nestjs/common';

import { CONFIG_OPTIONS } from './custom.constant';
import { IOptions } from './custom.interface';
import { CustomService } from './custom.service';

@Module({})
export class CustomModule {
  static forRoot(options: IOptions): DynamicModule {
    return {
      module: CustomModule,
      providers: [{ provide: CONFIG_OPTIONS, useValue: options }, CustomService],
      exports: [CustomService],
    };
  }
}
