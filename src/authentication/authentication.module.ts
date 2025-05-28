import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthController } from './authentication.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { AuthGuard } from './authentication.guard';
import { JwtStrategy } from './strategies/jwt.strategy'; 
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }), 
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'Jara1414',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthenticationService,
    JwtService,
    AuthGuard,
    JwtStrategy, 
  ],
  controllers: [AuthController],
  exports: [
    JwtService,
    AuthGuard,
    JwtStrategy, 
    PassportModule, 
  ],
})
export class AuthenticationModule {}
