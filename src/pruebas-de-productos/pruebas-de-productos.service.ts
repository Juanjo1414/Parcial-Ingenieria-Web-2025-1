import { Injectable } from '@nestjs/common';
import { CreatePruebasDeProductoDto } from './dto/create-pruebas-de-producto.dto';
import { UpdatePruebasDeProductoDto } from './dto/update-pruebas-de-producto.dto';

@Injectable()
export class PruebasDeProductosService {
  create(createPruebasDeProductoDto: CreatePruebasDeProductoDto) {
    return 'This action adds a new pruebasDeProducto';
  }

  findAll() {
    return `This action returns all pruebasDeProductos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pruebasDeProducto`;
  }

  update(id: number, updatePruebasDeProductoDto: UpdatePruebasDeProductoDto) {
    return `This action updates a #${id} pruebasDeProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} pruebasDeProducto`;
  }
}
