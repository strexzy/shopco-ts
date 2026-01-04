import { AUTH_ENDPOINTS, http } from "~/shared";
import type {
  AuthCredentials,
  AuthResponse,
  RegisterCredentials,
} from "../types/auth.types";

export const authApi = {
  login: (data: AuthCredentials) =>
    http.post<AuthResponse>(AUTH_ENDPOINTS.LOGIN, data),
  register: (data: RegisterCredentials) =>
    http.post<AuthResponse>(AUTH_ENDPOINTS.REGISTER, data),
  logout: () => http.get(AUTH_ENDPOINTS.LOGOUT),
  me: () => http.get<AuthResponse>(AUTH_ENDPOINTS.ME),
};
