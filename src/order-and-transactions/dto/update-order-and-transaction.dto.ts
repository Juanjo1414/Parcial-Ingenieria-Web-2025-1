import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderAndTransactionDto } from './create-order-and-transaction.dto';

export class UpdateOrderAndTransactionDto extends PartialType(CreateOrderAndTransactionDto) {}
