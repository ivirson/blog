import { User } from './user.model';

export interface AuthUser {
  user: User;
  token: string;
}
