import { useState } from "react";
import { useLoaderData } from "react-router";
import ArrowLeft from "~/assets/icons/basic/arrowL.svg";
import ArrowRight from "~/assets/icons/basic/arrowR.svg";
import { ReviewCard } from "~/features";
import { Spinner } from "~/shared";

const ReviewsSlider = ({ children }: React.PropsWithChildren) => {
  const { reviewList, error } = useLoaderData();
  const [currentReview, setCurrentReview] = useState<number>(0);

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
      {error ? (
        <div className="flex flex-col items-center gap-3">
          <Spinner />
          <p>{error}</p>
        </div>
      ) : (
        <ReviewCard review={reviewList[currentReview]} />
      )}
    </div>
  );
};

export default ReviewsSlider;
