import { useState } from "react";
import ArrowLeft from "~/assets/icons/basic/arrowL.svg";
import ArrowRight from "~/assets/icons/basic/arrowR.svg";
import { ReviewCard, useReviewList } from "~/features";

const ReviewsSlider = ({ children }: React.PropsWithChildren) => {
  const [currentReview, setCurrentReview] = useState<number>(0);

  const { data: reviewList, loading, error } = useReviewList("shopco");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!reviewList || reviewList.length === 0)
    return <div>No products found</div>;
  return (
    <div className="mx-4 flex flex-col gap-6">
      <div className="flex items-end justify-between">
        {children}
        <div className="flex gap-4">
          <img
            onClick={() => {
              currentReview > 0
                ? setCurrentReview((prev) => prev - 1)
                : setCurrentReview(reviewList.length - 1);
            }}
            src={ArrowLeft}
            alt="Button arrow left icon"
            className="w-6 h-6"
          />
          <img
            onClick={() => {
              currentReview < reviewList.length - 1
                ? setCurrentReview((prev) => prev + 1)
                : setCurrentReview(0);
            }}
            src={ArrowRight}
            alt="Button arrow right icon"
            className="w-6 h-6"
          />
        </div>
      </div>
      <ReviewCard review={reviewList[currentReview]} />
    </div>
  );
};

export default ReviewsSlider;
