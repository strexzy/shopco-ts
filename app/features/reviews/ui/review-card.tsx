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
      <Card className="w-full">
        <CardHeader>
          <RatingDisplay rating={rating} />
        </CardHeader>
        <CardContent>
          <p>{author}</p>
          <p>{text}</p>
        </CardContent>
        <CardFooter>
          <p>{date}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ReviewCard;
