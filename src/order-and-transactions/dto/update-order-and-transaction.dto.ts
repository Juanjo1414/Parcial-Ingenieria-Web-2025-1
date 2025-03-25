import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderTransDto } from './create-order-and-transaction.dto';

export class UpdateOrderAndTransactionDto extends PartialType(CreateOrderTransDto) {}
