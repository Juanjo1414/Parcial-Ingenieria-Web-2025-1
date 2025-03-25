import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductsTestsService } from './product-tests.service';
import { CreateProductsTestDto } from './dto/create-product-test.dto';
import { UpdateProductTestDto } from './dto/update-product-test.dto';
import { ProductTest } from './entities/product-test.entity';
import { Roles } from 'src/authentication/roles.decorator';
import { AuthGuard } from 'src/authentication/authentication.guard';

@Controller('products-tests')
export class ProductsTestsController {
  constructor(private readonly productsTestsService: ProductsTestsService) {}

  @Post()
  @Roles('admin', 'employee')
  @UseGuards(AuthGuard)
  async create(@Body() createProductsTestDto: CreateProductsTestDto): Promise<ProductTest> {
    return this.productsTestsService.create(createProductsTestDto);
  }

  @Get()
  @Roles('admin', 'employee')
  @UseGuards(AuthGuard)
  async findAll(): Promise<ProductTest[]> {
    return this.productsTestsService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'employee', 'tester')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string): Promise<ProductTest> {
    return this.productsTestsService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin', 'employee')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() updateProductsTestDto: UpdateProductTestDto): Promise<ProductTest> {
    return this.productsTestsService.update(id, updateProductsTestDto);
  }

  @Delete(':id')
  @Roles('admin')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsTestsService.remove(id);
  }
}