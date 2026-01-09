import HalfStarImg from "~/assets/icons/basic/half-star.svg";
import StarImg from "~/assets/icons/basic/star.svg";

type RatingDisplayProps = {
  rating: number;
};

const RatingDisplay = ({ rating }: RatingDisplayProps) => {
  const fullStars = rating > 5 ? 5 : Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  if (rating < 1) return <p>This product is not rated yet</p>;

  return (
    <div className="relative flex gap-1.5">
      {Array.from({ length: fullStars }).map((_, idx) => (
        <img
          src={StarImg}
          alt="Product's rating star"
          className="w-5 h-5"
          key={`full-star-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <Stars will not change their positions>
            idx
          }`}
        />
      ))}
      {hasHalf && (
        <img
          src={HalfStarImg}
          alt="Product's rating star"
          className="w-auto h-5"
        />
      )}
    </div>
  );
};

export default RatingDisplay;
