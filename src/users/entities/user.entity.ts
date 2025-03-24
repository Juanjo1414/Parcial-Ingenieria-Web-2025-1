import { OrderAndTransaction } from 'src/order-and-transactions/entities/order-and-transaction.entity';
import { ProductTest } from 'src/product-tests/entities/product-test.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    ADMIN = 'admin',
    CLIENT = 'client',
    TESTER = 'tester',
    EMPLOYEE = 'employee',
  }

@Entity() 
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    name: String;

    @Column({ unique: true }) // Se declara como único
    email: String;

    @Column()
    password: String;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.CLIENT}) 
    role: UserRole; 

    @OneToMany(() => OrderAndTransaction,(OrderAndTransaction) => OrderAndTransaction.client)
    purchase_history: OrderAndTransaction[];

    @Column({type: 'boolean', default: false})
    test_subject_status: boolean;

    @Column({type: 'text', nullable: true})
    allergic_reactions: string;

    @OneToMany(() => ProductTest, (productTest) => productTest.tester)
    productTests: ProductTest[];
}
