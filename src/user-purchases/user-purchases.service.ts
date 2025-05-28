import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-user-purchase.dto';
import { Purchase, PurchaseItem } from './entities/user-purchase.entity';
import { MakeupProduct } from 'src/makeup-products/entities/makeup-product.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UserPurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepo: Repository<Purchase>,

    @InjectRepository(PurchaseItem)
    private purchaseItemRepo: Repository<PurchaseItem>,

    @InjectRepository(MakeupProduct)
    private productRepo: Repository<MakeupProduct>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async createPurchase(userId: number, dto: CreatePurchaseDto) {
  const user = await this.userRepo.findOneBy({ id: userId.toString() });
  if (!user) {
    throw new NotFoundException('No se encontró el cliente autenticado.');
  }

    const items: PurchaseItem[] = [];

    for (const item of dto.items) {
      const product = await this.productRepo.findOneBy({ id: item.productId });
      if (!product) throw new NotFoundException('Producto no encontrado');
      if (product.stock < item.quantity) {
        throw new BadRequestException(`Stock insuficiente para ${product.name}`);
      }
      product.stock -= item.quantity;
      await this.productRepo.save(product);

      const purchaseItem = this.purchaseItemRepo.create({
        product,
        quantity: item.quantity,
      });
      items.push(purchaseItem);
    }

    const purchase = this.purchaseRepo.create({
      user,
      items,
    });

    return this.purchaseRepo.save(purchase);
  }

  async getPurchasesByUser(userId: string) {
    return this.purchaseRepo.find({
      where: { user: { id: userId } },
      relations: ['items', 'items.product'],
      order: { createdAt: 'DESC' },
    });
  }
}
