import { Module } from '@nestjs/common';
import { GlamGiantService } from './glam-giant.service';
import { GlamGiantController } from './glam-giant.controller';

@Module({
  controllers: [GlamGiantController],
  providers: [GlamGiantService],
})
export class GlamGiantModule {}
