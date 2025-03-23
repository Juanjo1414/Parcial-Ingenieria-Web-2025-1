import { Injectable } from '@nestjs/common';
import { CreateGlamGiantDto } from './dto/create-glam-giant.dto';
import { UpdateGlamGiantDto } from './dto/update-glam-giant.dto';

@Injectable()
export class GlamGiantService {
  create(createGlamGiantDto: CreateGlamGiantDto) {
    return 'This action adds a new glamGiant';
  }

  findAll() {
    return `This action returns all glamGiant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} glamGiant`;
  }

  update(id: number, updateGlamGiantDto: UpdateGlamGiantDto) {
    return `This action updates a #${id} glamGiant`;
  }

  remove(id: number) {
    return `This action removes a #${id} glamGiant`;
  }
}
