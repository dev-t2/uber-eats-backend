import { DynamicModule, Module } from '@nestjs/common';

import { IOptions } from './custom.interface';
import { OPTIONS } from './custom.constant';
import { CustomService } from './custom.service';

@Module({})
export class CustomModule {
  static forRoot(options: IOptions): DynamicModule {
    return {
      module: CustomModule,
      providers: [{ provide: OPTIONS, useValue: options }, CustomService],
      exports: [CustomService],
    };
  }
}
