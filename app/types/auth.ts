import type { PropsWithChildren } from "react";

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

export type AuthToken = string;

export type AuthError = string;

export interface AuthResponse {
  authToken: AuthToken;
  user: User;
}

export interface User {
  email: string;
  firstName: string;
  lastName?: string;
  role: "user" | "admin";
}

export interface AuthContext {
  currentUser: User | undefined | null;
  authError: AuthError | undefined | null;
  login: (data: AuthCredentials) => Promise<void>;
  register: (data: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
}
