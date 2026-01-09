export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  productId: string;
}

export interface ReviewState {
  review: Review | null;
  reviewError: string | null;
}

export interface ReviewActions {
  setReview: (newReview: Review) => void;
  setReviewError: (newReviewError: string) => void;
}

export interface ReviewStore extends ReviewState {
  actions: ReviewActions;
}
