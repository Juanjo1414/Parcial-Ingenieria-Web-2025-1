import { PartialType } from '@nestjs/mapped-types';
import { CreateGlamGiantDto } from './create-glam-giant.dto';

export class UpdateGlamGiantDto extends PartialType(CreateGlamGiantDto) {}
