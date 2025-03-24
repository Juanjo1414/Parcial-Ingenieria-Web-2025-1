import { Module } from '@nestjs/common';
import { OrderAndTransactionsService } from './order-and-transactions.service';
import { OrderAndTransactionsController } from './order-and-transactions.controller';

@Module({
  controllers: [OrderAndTransactionsController],
  providers: [OrderAndTransactionsService],
})
export class OrderAndTransactionsModule {}
