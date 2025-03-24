import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductTestsService } from './product-tests.service';
import { CreateProductTestDto } from './dto/create-product-test.dto';
import { UpdateProductTestDto } from './dto/update-product-test.dto';

@Controller('product-tests')
export class ProductTestsController {
  constructor(private readonly productTestsService: ProductTestsService) {}

  @Post()
  create(@Body() createProductTestDto: CreateProductTestDto) {
    return this.productTestsService.create(createProductTestDto);
  }

  @Get()
  findAll() {
    return this.productTestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTestDto: UpdateProductTestDto) {
    return this.productTestsService.update(+id, updateProductTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTestsService.remove(+id);
  }
}
