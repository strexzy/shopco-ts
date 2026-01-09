import { create } from "zustand";

import type { ReviewState, ReviewStore } from "./use-review-store.types";

const defaultValues: ReviewState = {
  review: null,
  reviewError: null,
};

export const useReviewStore = create<ReviewStore>()((set) => ({
  ...defaultValues,
  actions: {
    setReview: (newReview) => set(() => ({ review: newReview })),
    setReviewError: (newReviewError) =>
      set(() => ({ reviewError: newReviewError })),
  },
}));
