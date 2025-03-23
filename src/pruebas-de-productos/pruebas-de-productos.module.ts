import { Module } from '@nestjs/common';
import { PruebasDeProductosService } from './pruebas-de-productos.service';
import { PruebasDeProductosController } from './pruebas-de-productos.controller';

@Module({
  controllers: [PruebasDeProductosController],
  providers: [PruebasDeProductosService],
})
export class PruebasDeProductosModule {}
