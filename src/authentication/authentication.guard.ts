import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    console.log('🔍 Authorization Header:', authHeader); 

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new ForbiddenException('Access denied: Token not found');
    }

    const token = authHeader.split(' ')[1];
    console.log('🔍 Extracted Token:', token); 

    try {
      const decoded = this.jwtService.verify(token, { secret: process.env.JWT_SECRET || 'Jara1414' });
      console.log('🔍 Decoded Token:', decoded); 
      request.user = decoded;

      if (!requiredRoles || requiredRoles.includes(decoded.role)) {
        return true; // Acceso permitido
      }

      throw new ForbiddenException('Access denied: Insufficient permissions');
    } catch (error) {
      throw new ForbiddenException('Access denied: Invalid token');
    }
  }
}
