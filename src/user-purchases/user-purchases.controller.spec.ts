import { Test, TestingModule } from '@nestjs/testing';
import { UserPurchasesController } from './user-purchases.controller';
import { UserPurchasesService } from './user-purchases.service';

describe('UserPurchasesController', () => {
  let controller: UserPurchasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPurchasesController],
      providers: [UserPurchasesService],
    }).compile();

    controller = module.get<UserPurchasesController>(UserPurchasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
