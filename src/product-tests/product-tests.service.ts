import { Injectable } from '@nestjs/common';
import { CreateProductsTestDto } from './dto/create-product-test.dto';
import { UpdateProductTestDto } from './dto/update-product-test.dto';

@Injectable()
export class ProductTestsService {
  create(createProductTestDto: CreateProductsTestDto) {
    return 'This action adds a new productTest';
  }

  findAll() {
    return `This action returns all productTests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productTest`;
  }

  update(id: number, updateProductTestDto: UpdateProductTestDto) {
    return `This action updates a #${id} productTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} productTest`;
  }
}
