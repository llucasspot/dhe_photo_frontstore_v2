import { SignInBody } from '../dtos';

export type AuthUser = {
  id: string;
  email: string;
};

export type AuthResponse = {
  userId: string;
  authToken: string;
};

export abstract class AuthProviderPort {
  abstract getUserInfo(userId: string): Promise<AuthUser>;

  abstract signIn(body: SignInBody): Promise<AuthResponse>;

  abstract logout(): Promise<void>;
}
