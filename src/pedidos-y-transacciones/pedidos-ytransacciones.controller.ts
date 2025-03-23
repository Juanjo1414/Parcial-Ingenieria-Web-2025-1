import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidosYtransaccionesService } from './pedidos-ytransacciones.service';
import { CreatePedidosYtransaccioneDto } from './dto/create-pedidos-ytransaccione.dto';
import { UpdatePedidosYtransaccioneDto } from './dto/update-pedidos-ytransaccione.dto';

@Controller('pedidos-ytransacciones')
export class PedidosYtransaccionesController {
  constructor(private readonly pedidosYtransaccionesService: PedidosYtransaccionesService) {}

  @Post()
  create(@Body() createPedidosYtransaccioneDto: CreatePedidosYtransaccioneDto) {
    return this.pedidosYtransaccionesService.create(createPedidosYtransaccioneDto);
  }

  @Get()
  findAll() {
    return this.pedidosYtransaccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosYtransaccionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidosYtransaccioneDto: UpdatePedidosYtransaccioneDto) {
    return this.pedidosYtransaccionesService.update(+id, updatePedidosYtransaccioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosYtransaccionesService.remove(+id);
  }
}
