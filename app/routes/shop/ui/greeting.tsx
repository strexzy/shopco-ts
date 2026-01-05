import { Link } from "react-router";
import GreetingImage from "~/assets/images/greeting.png";
import { Button } from "~/shared";
import BenefitList from "./benefit-list";
import Brands from "./brands";

const Greeting = () => {
  return (
    <>
      <div className="mx-4 flex flex-col gap-6">
        <div className="flex flex-col gap-5">
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
        <BenefitList />
      </div>
      <img
        className="w-full"
        src={GreetingImage}
        alt="Fashionably dressed girl and guy"
      />
      <Brands />
    </>
  );
};

export default Greeting;
