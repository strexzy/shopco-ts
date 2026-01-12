import { useReviewList } from "~/features";

const ReviewsSlider = ({ children }: React.PropsWithChildren) => {
  const { data: reviewList, loading, error } = useReviewList("shopco");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!reviewList || reviewList.length === 0)
    return <div>No products found</div>;
  return (
    <div>
      <div>{children}</div>
      <div>Slider itself</div>
    </div>
  );
};

export default ReviewsSlider;
