import { Link } from "react-router";
import GreetingImage from "~/assets/images/greeting.png";
import { Button } from "~/shared";
import BenefitList from "./benefit-list";
import Brands from "./brands";

const Greeting = () => {
  return (
    <div className="overflow-hidden bg-primary-grey pt-10 md:relative md:z-10">
      <div className="mx-4 flex flex-col gap-6 md:w-1/2 md:z-30 md:pb-10">
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
          <Button className="w-full h-13 rounded-full md:w-1/3">
            Shop Now
          </Button>
        </Link>
        <BenefitList />
      </div>
      <img
        className="w-full md:absolute md:top-0 md:right-0 md:-z-10 md:w-1/2"
        src={GreetingImage}
        alt="Fashionably dressed girl and guy"
      />
      <Brands />
    </div>
  );
};

export default Greeting;
