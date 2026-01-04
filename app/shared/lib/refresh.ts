import axios from "axios";
import type { AuthToken } from "~/features/auth/types/auth.types";
import { API_URL, AUTH_ENDPOINTS } from "~/shared/constants/constants";

export const refreshToken = async () =>
  axios.get<AuthToken>(API_URL + AUTH_ENDPOINTS.REFRESH, {
    withCredentials: true,
  });
