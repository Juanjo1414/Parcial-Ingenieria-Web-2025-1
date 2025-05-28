import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { UserPurchasesService } from './user-purchases.service';
import { CreatePurchaseDto } from './dto/create-user-purchase.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user-purchases')
export class UserPurchasesController {
  constructor(private readonly userPurchasesService: UserPurchasesService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Req() req, @Body() dto: CreatePurchaseDto) {
    return this.userPurchasesService.createPurchase(req.user.id, dto);
  }

  @Get('mine')
  @UseGuards(AuthGuard('jwt'))
  getMine(@Req() req) {
    return this.userPurchasesService.getPurchasesByUser(req.user.id);
  }
}