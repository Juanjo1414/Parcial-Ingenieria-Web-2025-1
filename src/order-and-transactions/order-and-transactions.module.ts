import { Module } from '@nestjs/common';
import { OrderTransService } from './order-and-transactions.service';
import { OrderTransController } from './order-and-transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderAndTransaction } from './entities/order-and-transaction.entity';
import { User } from 'src/users/entities/user.entity';
import { MakeupProduct } from 'src/makeup-products/entities/makeup-product.entity';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderAndTransaction, User, MakeupProduct]), AuthenticationModule],
  controllers: [OrderTransController],
  providers: [OrderTransService],
})
export class OrderTransModule {}
