import { Link } from "react-router";
import { Button } from "~/shared";

const Greeting = () => {
  return (
    <div className="mx-4">
      <div className="max-w-89.5 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl text-black font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm text-gray-500 font-normal">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>
        <Link to="/shop">
          <Button className="w-full h-13 rounded-full text-[16px]">
            Shop Now
          </Button>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default Greeting;
