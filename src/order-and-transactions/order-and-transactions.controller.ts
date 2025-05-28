import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrderTransService } from './order-and-transactions.service';
import { CreateOrderTransDto } from './dto/create-order-and-transaction.dto';
import { UpdateOrderAndTransactionDto } from './dto/update-order-and-transaction.dto';
import { Roles } from 'src/authentication/roles.decorator';
import { AuthGuard } from 'src/authentication/authentication.guard';
import { OrderAndTransaction } from './entities/order-and-transaction.entity';
import { Request } from '@nestjs/common';


@Controller('orders')
export class OrderTransController {
  constructor(private readonly orderTransService: OrderTransService) {}

 @Post()
@Roles('admin', 'employee', 'client')
@UseGuards(AuthGuard)
async create(@Request() req, @Body() createOrderDto: CreateOrderTransDto): Promise<OrderAndTransaction> {
  const user = req.user; // Usuario autenticado del token
  return this.orderTransService.create(user.id, createOrderDto);
}

  @Get()
  @Roles('admin')
  @UseGuards(AuthGuard)
  async findAll(): Promise<OrderAndTransaction[]> {
    return this.orderTransService.findAll();
  }

  @Get(':id')
  @Roles('admin','employee', 'client')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string): Promise<OrderAndTransaction> {
    return this.orderTransService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderAndTransactionDto): Promise<OrderAndTransaction> {
    return this.orderTransService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @Roles('admin')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string): Promise<void> {
    await this.orderTransService.remove(id);
  }
}
