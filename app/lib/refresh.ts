import axios from "axios";
import { API_URL, AUTH_ENDPOINTS } from "~/constants/constants";
import type { AuthToken } from "~/types/auth";

export const refreshToken = async () =>
  axios.get<AuthToken>(API_URL + AUTH_ENDPOINTS.REFRESH, {
    withCredentials: true,
  });
