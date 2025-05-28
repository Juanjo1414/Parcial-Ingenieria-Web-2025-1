import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from 'src/users/entities/user.entity';

@Injectable()
export class AuthenticationService {
   constructor(
      @InjectRepository(User) private userRepo: Repository<User>,
      private jwtService: JwtService,
   ) { }

   //este metodo registra y al momento de registrar realiza una copia de la entidad de usurario en el que meramente hashea la contrasena
   async register(email: string, name: string, password: string, role: UserRole) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = this.userRepo.create({ email, name, password: hashedPassword, role });
      return this.userRepo.save(user);
   }

   //este metodo valida que las credenciales del usuario sean correctas respecto a las credenciales originales
   async login(email: string, password: string) {
      const user = await this.userRepo.findOne({ where: { email } });
      if (!user) throw new Error('User Not Found');

      const passwordValid = await bcrypt.compare(password, user.password);
      if (!passwordValid) throw new Error('incorrect password');

      const token = this.jwtService.sign(
         {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
         },
         { secret: process.env.JWT_SECRET || 'Jara1414' }
      );

      return { token };
   }


}
