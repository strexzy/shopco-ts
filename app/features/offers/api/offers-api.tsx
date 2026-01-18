import { http, OFFERS_ENDPOINT } from "~/shared";

export const offersApi = {
  subscribe: (email: string) => http.post<string>(OFFERS_ENDPOINT, email),
};
