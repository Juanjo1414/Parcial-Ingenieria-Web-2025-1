import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MakeupProductsModule } from './makeup-products/makeup-products.module';
import { ProductTestsModule } from './product-tests/product-tests.module';
import { OrderAndTransactionsModule } from './order-and-transactions/order-and-transactions.module';

@Module({
  imports: [UsersModule, MakeupProductsModule, ProductTestsModule, OrderAndTransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
