import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { parse } from 'url'; 
import { UsersModule } from './users/users.module';
import { MakeupProductsModule } from './makeup-products/makeup-products.module';
import { ProductsTestsModule } from './product-tests/product-tests.module';
import { OrderAndTransactionsModule } from './order-and-transactions/order-and-transactions.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';


dotenv.config({ path: path.resolve(__dirname, '../.env') });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL no está definida en el .env');
}

const dbUrl = new URL(process.env.DATABASE_URL);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: dbUrl.hostname,
      port: Number(dbUrl.port),
      username: dbUrl.username,
      password: dbUrl.password,
      database: dbUrl.pathname?.substring(1),
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: false, 
        },
      },
    }),
    UsersModule, MakeupProductsModule, ProductsTestsModule, OrderAndTransactionsModule, AuthenticationModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
