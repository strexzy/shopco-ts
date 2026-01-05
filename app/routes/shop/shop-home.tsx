import Greeting from "./ui/section-greeting";
import Products from "./ui/section-products";

export function meta() {
  return [
    { title: "SHOP.CO Clothing website" },
    { name: "description", content: "Welcome to SHOP.CO!" },
  ];
}

function Home() {
  return (
    <>
      <Greeting />
      <Products />
    </>
  );
}

export default Home;
