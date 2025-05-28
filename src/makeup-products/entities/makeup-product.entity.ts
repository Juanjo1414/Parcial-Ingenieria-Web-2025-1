import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductTest } from 'src/product-tests/entities/product-test.entity';
import { Max, Min } from 'class-validator';

export enum ProductCategory {
  LIPSTICK = 'lipstick',
  FOUNDATION = 'foundation',
  EYESHADOW = 'eyeshadow',
  OTHER = 'other',
}


@Entity()
export class MakeupProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: ProductCategory })
  category: ProductCategory;

  @Column({ type: 'int' })
  @Min(0)
  stock: number;

  @Column()
  warehouse_location: string;

  @Column({ type: 'int', default: 5 })
  @Min(1)
  @Max(10)
  durability_score: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 }) 
  @Min(0)
  price: number;

  @OneToMany(() => ProductTest, (productTest) => productTest.product)
  productTests: ProductTest[];
}

