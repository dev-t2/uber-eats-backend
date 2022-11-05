import { Inject, Injectable } from '@nestjs/common';

import { CONFIG_OPTIONS } from './custom.constant';
import { IOptions } from './custom.interface';

@Injectable()
export class CustomService {
  constructor(@Inject(CONFIG_OPTIONS) private readonly options: IOptions) {}

  log() {
    return { forRoot: this.options.description };
  }
}
