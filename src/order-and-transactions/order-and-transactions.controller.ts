import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderAndTransactionsService } from './order-and-transactions.service';
import { CreateOrderTransDto } from './dto/create-order-and-transaction.dto';
import { UpdateOrderAndTransactionDto } from './dto/update-order-and-transaction.dto';

@Controller('order-and-transactions')
export class OrderAndTransactionsController {
  constructor(private readonly orderAndTransactionsService: OrderAndTransactionsService) {}

  @Post()
  create(@Body() createOrderAndTransactionDto: CreateOrderTransDto) {
    return this.orderAndTransactionsService.create(createOrderAndTransactionDto);
  }

  @Get()
  findAll() {
    return this.orderAndTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderAndTransactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderAndTransactionDto: UpdateOrderAndTransactionDto) {
    return this.orderAndTransactionsService.update(+id, updateOrderAndTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderAndTransactionsService.remove(+id);
  }
}
