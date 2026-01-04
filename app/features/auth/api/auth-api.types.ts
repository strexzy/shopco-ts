import type { User } from "../context/auth-context.types";

export type AuthToken = string;

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  firstName: string;
  password: string;
  passwordConfirm: string;
}

export interface AuthResponse {
  authToken: AuthToken;
  user: User;
}
