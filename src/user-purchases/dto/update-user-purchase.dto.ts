import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDto } from './create-user-purchase.dto';

export class UpdateUserPurchaseDto extends PartialType(CreatePurchaseDto) {}
