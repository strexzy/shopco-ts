import { isAxiosError } from "axios";

export const safeAxiosError = (error: unknown): string => {
  if (isAxiosError(error) && typeof error.response?.data.message === "string") {
    return error.response?.data.message;
  } else {
    return "Unknown error, try again later...";
  }
};
