import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlamGiantModule } from './Glam-Giant/glam-giant.module';
import { ProductosModule } from './Productos-de-maquillaje/productos/productos.module';
import { PruebasDeProductosModule } from './pruebas-de-productos/pruebas-de-productos.module';
import { PedidosYtransaccionesModule } from './pedidos-y-transacciones/pedidos-ytransacciones.module';

@Module({
  imports: [GlamGiantModule, ProductosModule, PruebasDeProductosModule, PedidosYtransaccionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
