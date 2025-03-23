import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebasDeProductoDto } from './create-pruebas-de-producto.dto';

export class UpdatePruebasDeProductoDto extends PartialType(CreatePruebasDeProductoDto) {}
