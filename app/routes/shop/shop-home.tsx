import Greeting from "./ui/section-greeting";
import Products from "./ui/section-products";
import Reviews from "./ui/section-reviews";
import Style from "./ui/section-style";

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
    </div>
  );
}

export default Home;
