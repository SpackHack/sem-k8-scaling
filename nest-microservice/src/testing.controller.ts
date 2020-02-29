import { Controller, Get } from '@nestjs/common';
import { TestingService } from './testing.service';

@Controller('test')
export class TestingController {
  constructor(private readonly testingService: TestingService) {}

  @Get('memory')
  runMemoryTest(): string {
    this.testingService.runMemoryTest();
    return 'memory test done';
  }

  @Get('cpu')
  async runCpuTest(): Promise<any> {
    this.testingService.runCpuTest();
    return 'cpu test done';
  }
}
