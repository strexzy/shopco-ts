import type { Review } from "../model/use-review-store.types";

export type ReviewList = Review[];

export interface GetReviewParams {
  productId: string;
  reviewId: string;
}

export interface PostReviewParams {
  productId: string;
  review: Review;
}

export interface UpdateReviewParams {
  productId: string;
  reviewId: string;
  review: Review;
}
export interface DeleteReviewParams {
  productId: string;
  reviewId: string;
}

export interface GetReviewListParams {
  productId: string;
}
