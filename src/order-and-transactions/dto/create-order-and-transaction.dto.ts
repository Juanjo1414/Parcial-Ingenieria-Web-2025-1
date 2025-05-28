import { IsArray, IsEnum, IsNumber, IsUUID, Min } from "class-validator";
import { PaymentStatus } from "../entities/order-and-transaction.entity";

export class CreateOrderTransDto {
  @IsArray()
  @IsUUID("all", { each: true })
  productIds: string[];

  @IsNumber()
  @Min(0)
  total_amount: number;

  @IsEnum(PaymentStatus)
  payment_status: PaymentStatus;
}


