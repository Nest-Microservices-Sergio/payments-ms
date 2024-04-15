import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {
  @Get()
  healtCheck() {
    return 'Payments Webhook is up and running!!!';
  }
}
