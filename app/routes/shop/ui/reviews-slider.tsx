import { useState } from "react";
import { useLoaderData } from "react-router";
import ArrowLeft from "~/assets/icons/basic/arrowL.svg";
import ArrowRight from "~/assets/icons/basic/arrowR.svg";
import { ReviewCard } from "~/features";
import type { ShopHomeLoaderData } from "../loaders/shop-home-loader";

const ReviewsSlider = ({ children }: React.PropsWithChildren) => {
  const { reviewList, error } = useLoaderData<ShopHomeLoaderData>();
  const [currentReview, setCurrentReview] = useState<number>(0);

  if (reviewList === null || error)
    return (
      <div className="mx-4 flex flex-col gap-6">
        <div className="flex items-end justify-between">
          {children}
          <div className="flex gap-4">
            <img
              src={ArrowLeft}
              alt="Button arrow left icon"
              className="w-6 h-6"
            />
            <img
              src={ArrowRight}
              alt="Button arrow right icon"
              className="w-6 h-6"
            />
          </div>
        </div>
        <ReviewCard error={error} review={null} />
      </div>
    );

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
      <ReviewCard error={error} review={reviewList[currentReview]} />
    </div>
  );
};

export default ReviewsSlider;
