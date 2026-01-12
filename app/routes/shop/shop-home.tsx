import Greeting from "./ui/section-greeting";
import Products from "./ui/section-products";
import Style from "./ui/section-style";
import Reviews from "./ui/section-reviews";
// import ReviewCard from "~/features/reviews/ui/review-card";

export function meta() {
  return [
    { title: "SHOP.CO Clothing website" },
    { name: "description", content: "Welcome to SHOP.CO!" },
  ];
}

function Home() {
  return (
    <div className="flex flex-col gap-12.5">
      <Greeting />
      <Products />
      <Style />
      <Reviews />
      {/* <ReviewCard
        review={{
          id: "123",
          author: "Ethan R.",
          text: "Good quality Good qualityGood quality Good quality Good quality Good quality Good quality Good qualityGood quality Good qualityGood quality Good quality Good quality Good quality Good quality Good quality Good quality Good qualityGood quality Good quality Good quality Good quality Good quality Good quality Good quality Good qualityGood quality Good quality Good quality Good quality Good quality Good quality",
          rating: 3.5,
          date: "January 11, 2025",
          productId: "444",
        }}
      /> */}
    </div>
  );
}

export default Home;
