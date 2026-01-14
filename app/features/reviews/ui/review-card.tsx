import { Link } from "react-router";
import type { Review } from "~/entities";
import { Card, CardContent, CardFooter, CardHeader } from "~/shared";
import RatingDisplay from "./rating-display";

type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({
  review: { author, text, rating, date, productId },
}: ReviewCardProps) => {
  return (
    <Link to={`/shop/${productId}`}>
      <Card className="overflow-hidden w-full gap-4">
        <div className="flex flex-col gap-3">
          <CardHeader>
            <RatingDisplay rating={rating} />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-base text-black font-bold">{author}</p>
            <div className="max-h-25 overflow-scroll">
              <p className="text-sm text-gray-500">{`"${text}"`}</p>
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <p className="text-sm font-medium text-gray-500">{`Posted on ${date}`}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ReviewCard;
