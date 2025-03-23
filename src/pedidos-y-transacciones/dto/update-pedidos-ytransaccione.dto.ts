import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidosYtransaccioneDto } from './create-pedidos-ytransaccione.dto';

export class UpdatePedidosYtransaccioneDto extends PartialType(CreatePedidosYtransaccioneDto) {}
