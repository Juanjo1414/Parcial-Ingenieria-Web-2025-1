import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { OrderAndTransaction } from 'src/order-and-transactions/entities/order-and-transaction.entity';
import { ProductTest } from 'src/product-tests/entities/product-test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, OrderAndTransaction, ProductTest]), AuthenticationModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
