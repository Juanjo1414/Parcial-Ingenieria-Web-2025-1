import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlamGiantModule } from './glam-giant/glam-giant.module';

@Module({
  imports: [GlamGiantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
