import { Module } from '@nestjs/common';
import { PedidosYtransaccionesService } from './pedidos-ytransacciones.service';
import { PedidosYtransaccionesController } from './pedidos-ytransacciones.controller';

@Module({
  controllers: [PedidosYtransaccionesController],
  providers: [PedidosYtransaccionesService],
})
export class PedidosYtransaccionesModule {}
