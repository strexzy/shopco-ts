import Greeting from "./ui/greeting";

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
    </>
  );
}

export default Home;
