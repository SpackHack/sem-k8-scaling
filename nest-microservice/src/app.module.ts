import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TestingController } from './testing.controller';
import { TestingService } from './testing.service';
import { MetricsController } from './metrics.controller';

@Module({
  imports: [],
  controllers: [AppController, TestingController, MetricsController],
  providers: [TestingService],
})
export class AppModule {}
