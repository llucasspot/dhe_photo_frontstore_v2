import { SignInBody } from '../dtos';

export interface AuthUser {
  id: string;
  email: string;
}

export interface AuthResponse {
  userId: string;
  authToken: string;
}

export abstract class AuthProviderPort {
  abstract getUserInfo(userId: string): Promise<AuthUser>;

  abstract signIn(body: SignInBody): Promise<AuthResponse>;

  abstract logout(): Promise<void>;
}
