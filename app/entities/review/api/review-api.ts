import axios from "axios";
import { API_URL, http, REVIEWS_ENDPOINT } from "~/shared";
import type { Review } from "../model/use-review-store.types";
import type {
  DeleteReviewParams,
  GetReviewListParams,
  GetReviewParams,
  PostReviewParams,
  UpdateReviewParams,
} from "./review-api.types";

export const reviewApi = {
  getReview: ({ productId, reviewId }: GetReviewParams) =>
    axios.get<Review>(`${API_URL + REVIEWS_ENDPOINT}/${productId}/${reviewId}`),
  postReview: ({ productId, review }: PostReviewParams) =>
    http.post<Review>(`${REVIEWS_ENDPOINT}/${productId}`, review),
  updateReview: ({ productId, reviewId, review }: UpdateReviewParams) =>
    http.patch<Review>(`${REVIEWS_ENDPOINT}/${productId}/${reviewId}`, review),
  deleteReview: ({ productId, reviewId }: DeleteReviewParams) =>
    http.delete(`${REVIEWS_ENDPOINT}/${productId}/${reviewId}`),
  getReviewList: ({ productId }: GetReviewListParams) =>
    axios.get<Review[]>(`${API_URL + REVIEWS_ENDPOINT}/${productId}`),
};
