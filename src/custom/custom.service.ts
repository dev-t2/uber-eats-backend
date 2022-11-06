import { Inject, Injectable } from '@nestjs/common';

import { OPTIONS } from './custom.constant';
import { IOptions } from './custom.interface';

@Injectable()
export class CustomService {
  constructor(@Inject(OPTIONS) private readonly options: IOptions) {}

  log() {
    return { forRoot: this.options.description };
  }
}
