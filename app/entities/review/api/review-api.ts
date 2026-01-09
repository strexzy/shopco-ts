import axios from "axios";
import type { Review } from "../model/use-review-store.types";
import { http } from "~/shared";
import { REVIEWS_ENDPOINT } from "~/shared";
import type {
  GetReviewParams,
  PostReviewParams,
  UpdateReviewParams,
  DeleteReviewParams,
  GetReviewListParams,
} from "./review-api.types";

export const reviewsApi = {
  getReview: async ({ productId, reviewId }: GetReviewParams) =>
    axios.get<Review>(`${REVIEWS_ENDPOINT}/${productId}/${reviewId}`),
  postReview: async ({ productId, review }: PostReviewParams) =>
    http.post<Review>(`${REVIEWS_ENDPOINT}/${productId}`, review),
  updateReview: async ({ productId, reviewId, review }: UpdateReviewParams) =>
    http.patch<Review>(`${REVIEWS_ENDPOINT}/${productId}/${reviewId}`, review),
  deleteReview: async ({ productId, reviewId }: DeleteReviewParams) =>
    http.delete(`${REVIEWS_ENDPOINT}/${productId}/${reviewId}`),
  getReviewList: async ({ productId }: GetReviewListParams) =>
    axios.get<Review[]>(`${REVIEWS_ENDPOINT}/${productId}`),
};
