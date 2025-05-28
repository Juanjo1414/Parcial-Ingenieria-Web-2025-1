import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPurchasesController } from './user-purchases.controller';
import { UserPurchasesService } from './user-purchases.service';
import { Purchase, PurchaseItem } from './entities/user-purchase.entity';
import { MakeupProduct } from 'src/makeup-products/entities/makeup-product.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Purchase, PurchaseItem, MakeupProduct, User])
  ],
  controllers: [UserPurchasesController],
  providers: [UserPurchasesService]
})
export class UserPurchasesModule {}
