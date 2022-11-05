import { DynamicModule, Module } from '@nestjs/common';

import { CustomService } from './custom.service';

@Module({})
export class CustomModule {
  static forRoot(): DynamicModule {
    return {
      module: CustomModule,
      providers: [CustomService],
      exports: [CustomService],
    };
  }
}
