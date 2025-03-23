import { Injectable } from '@nestjs/common';
import { CreatePedidosYtransaccioneDto } from './dto/create-pedidos-ytransaccione.dto';
import { UpdatePedidosYtransaccioneDto } from './dto/update-pedidos-ytransaccione.dto';

@Injectable()
export class PedidosYtransaccionesService {
  create(createPedidosYtransaccioneDto: CreatePedidosYtransaccioneDto) {
    return 'This action adds a new pedidosYtransaccione';
  }

  findAll() {
    return `This action returns all pedidosYtransacciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidosYtransaccione`;
  }

  update(id: number, updatePedidosYtransaccioneDto: UpdatePedidosYtransaccioneDto) {
    return `This action updates a #${id} pedidosYtransaccione`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidosYtransaccione`;
  }
}
