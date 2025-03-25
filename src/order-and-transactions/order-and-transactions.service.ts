import { Injectable } from '@nestjs/common';
import { CreateOrderTransDto } from './dto/create-order-and-transaction.dto';
import { UpdateOrderAndTransactionDto } from './dto/update-order-and-transaction.dto';

@Injectable()
export class OrderAndTransactionsService {
  create(createOrderAndTransactionDto: CreateOrderTransDto) {
    return 'This action adds a new orderAndTransaction';
  }

  findAll() {
    return `This action returns all orderAndTransactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderAndTransaction`;
  }

  update(id: number, updateOrderAndTransactionDto: UpdateOrderAndTransactionDto) {
    return `This action updates a #${id} orderAndTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderAndTransaction`;
  }
}
