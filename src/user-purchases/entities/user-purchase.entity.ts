import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, Column } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { MakeupProduct } from 'src/makeup-products/entities/makeup-product.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.purchases)
  user: User;

  @OneToMany(() => PurchaseItem, item => item.purchase, { cascade: true })
  items: PurchaseItem[];

  @CreateDateColumn()
  createdAt: Date;
}

@Entity()
export class PurchaseItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Purchase, purchase => purchase.items)
  purchase: Purchase;

  @ManyToOne(() => MakeupProduct)
  product: MakeupProduct;

  @Column()
  quantity: number;
}
