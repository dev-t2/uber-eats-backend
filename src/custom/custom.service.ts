import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CustomService {
  private readonly logger = new Logger(CustomService.name);

  log() {
    this.logger.log('Custom Module and Service POC');
  }
}
