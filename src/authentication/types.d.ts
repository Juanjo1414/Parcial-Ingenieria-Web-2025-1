// src/authentication/types.d.ts (o en un archivo global de tipos)

import { User } from 'src/users/entities/user.entity';

declare module 'express' {
  interface Request {
    user?: User;
  }
}