import { Module } from '@nestjs/common';
import { MakeupProductsService } from './makeup-products.service';
import { MakeupProductsController } from './makeup-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeupProduct } from './entities/makeup-product.entity';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { ProductTest } from 'src/product-tests/entities/product-test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MakeupProduct, ProductTest]), AuthenticationModule],
  controllers: [MakeupProductsController],
  providers: [MakeupProductsService],
})
export class MakeupProductsModule {}
