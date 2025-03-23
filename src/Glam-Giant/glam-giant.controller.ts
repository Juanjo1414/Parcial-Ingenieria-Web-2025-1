import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlamGiantService } from './glam-giant.service';
import { CreateGlamGiantDto } from './dto/create-glam-giant.dto';
import { UpdateGlamGiantDto } from './dto/update-glam-giant.dto';

@Controller('glam-giant')
export class GlamGiantController {
  constructor(private readonly glamGiantService: GlamGiantService) {}

  @Post()
  create(@Body() createGlamGiantDto: CreateGlamGiantDto) {
    return this.glamGiantService.create(createGlamGiantDto);
  }

  @Get()
  findAll() {
    return this.glamGiantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.glamGiantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGlamGiantDto: UpdateGlamGiantDto) {
    return this.glamGiantService.update(+id, updateGlamGiantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.glamGiantService.remove(+id);
  }
}
