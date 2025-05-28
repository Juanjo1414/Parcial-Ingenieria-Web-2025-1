import { NestFactory } from '@nestjs/core'; 
import * as dotenv from 'dotenv';
import * as path from 'path';

// Cargar el .env desde la raíz del proyecto
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { AppModule } from './app.module';

console.log('DATABASE_URL desde dotenv:', process.env.DATABASE_URL); 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Habilitar CORS para desarrollo y producción
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://proyecto-ingenieria-web-2025-1-fron.vercel.app'
    ],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
