export interface Review {
  id: string;
  author: string;
  text: string;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
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
