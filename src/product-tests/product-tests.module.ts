import { Module } from '@nestjs/common';
import { ProductTestsService } from './product-tests.service';
import { ProductTestsController } from './product-tests.controller';

@Module({
  controllers: [ProductTestsController],
  providers: [ProductTestsService],
})
export class ProductTestsModule {}
