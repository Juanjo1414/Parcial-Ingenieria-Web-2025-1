import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsTestDto } from './create-product-test.dto';

export class UpdateProductTestDto extends PartialType(CreateProductsTestDto) {}
