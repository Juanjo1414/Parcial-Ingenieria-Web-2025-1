import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { ProductsTestsService } from './product-tests.service';
import { CreateProductsTestDto } from './dto/create-product-test.dto';
import { UpdateProductTestDto } from './dto/update-product-test.dto';
import { ProductTest } from './entities/product-test.entity';
import { Roles } from 'src/authentication/roles.decorator';
import { AuthGuard } from 'src/authentication/authentication.guard';
import { RolesGuard } from 'src/authentication/roles.guard';

@Controller('products-tests')
@UseGuards(AuthGuard, RolesGuard)  // Aplica ambos guards a todo el controlador
export class ProductsTestsController {
  constructor(private readonly productsTestsService: ProductsTestsService) {}

  @Post()
  @Roles('admin', 'tester')
  async create(
    @Body() createProductsTestDto: CreateProductsTestDto,
    @Req() req: any,
  ): Promise<ProductTest> {
    const testerId = req.user?.id;
    if (!testerId) {
      throw new UnauthorizedException('No se pudo obtener el ID del tester. Por favor, inicia sesión de nuevo.');
    }
    return this.productsTestsService.create(createProductsTestDto, testerId);
  }

  @Get()
  @Roles('admin', 'tester')
  async findAll(): Promise<ProductTest[]> {
    return this.productsTestsService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'tester')
  async findOne(@Param('id') id: string): Promise<ProductTest> {
    return this.productsTestsService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin', 'tester')
  async update(
    @Param('id') id: string,
    @Body() updateProductsTestDto: UpdateProductTestDto,
  ): Promise<ProductTest> {
    return this.productsTestsService.update(id, updateProductsTestDto);
  }

  @Delete(':id')
  @Roles('admin')
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsTestsService.remove(id);
  }
}
