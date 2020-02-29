import { Injectable } from '@nestjs/common';

@Injectable()
export class TestingService {
  runMemoryTest() {
    const results = [];
    let i = 0;
    while (i < 10000000000) {
      results.push(results.push['0123456789']);
      i++;
    }
  }

  runCpuTest() {
    let i = 999;
    let iterations = 0;
    while (iterations < 1000000000) {
      Math.sqrt(i * i * i * i);
      i++;
      iterations++;
    }
  }
}
