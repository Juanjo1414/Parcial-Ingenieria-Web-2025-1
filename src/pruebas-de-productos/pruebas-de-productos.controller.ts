import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PruebasDeProductosService } from './pruebas-de-productos.service';
import { CreatePruebasDeProductoDto } from './dto/create-pruebas-de-producto.dto';
import { UpdatePruebasDeProductoDto } from './dto/update-pruebas-de-producto.dto';

@Controller('pruebas-de-productos')
export class PruebasDeProductosController {
  constructor(private readonly pruebasDeProductosService: PruebasDeProductosService) {}

  @Post()
  create(@Body() createPruebasDeProductoDto: CreatePruebasDeProductoDto) {
    return this.pruebasDeProductosService.create(createPruebasDeProductoDto);
  }

  @Get()
  findAll() {
    return this.pruebasDeProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pruebasDeProductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePruebasDeProductoDto: UpdatePruebasDeProductoDto) {
    return this.pruebasDeProductosService.update(+id, updatePruebasDeProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pruebasDeProductosService.remove(+id);
  }
}
