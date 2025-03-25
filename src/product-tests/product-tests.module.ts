import { Module } from '@nestjs/common';
import { ProductsTestsService } from './product-tests.service';
import { ProductsTestsController } from './product-tests.controller';
import { ProductTest } from './entities/product-test.entity';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeupProduct } from 'src/makeup-products/entities/makeup-product.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTest, User, MakeupProduct]), AuthenticationModule],
  controllers: [ProductsTestsController],
  providers: [ProductsTestsService],
})
export class ProductsTestsModule {}
