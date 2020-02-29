import { Controller, Get } from '@nestjs/common';

@Controller('metrics')
export class MetricsController {
  @Get()
  metrics(): string {
    return 'sem_metric 5';
  }
}
