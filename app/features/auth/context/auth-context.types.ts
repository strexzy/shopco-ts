import type {
  AuthCredentials,
  RegisterCredentials,
} from "../api/auth-api.types";

export type AuthError = string;

export interface User {
  email: string;
  firstName: string;
  lastName?: string;
  role: "user" | "admin";
}

export interface AuthContextTypes {
  currentUser: User | undefined | null;
  authError: AuthError | undefined | null;
  login: (data: AuthCredentials) => Promise<void>;
  register: (data: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
}
