import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  ping(): string {
    return `Nest-shop is alive. Timestamp: ${new Date()}`;
  }
}
