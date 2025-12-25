import { Link } from "react-router";

const Promobar = () => {
  return (
    <div className="bg-black w-full flex justify-center py-2.25">
      <Link to="/register">
        <p className="text-white font-light text-xs">
          Sign up and get 20% off to your first order.{" "}
          <span className="font-normal underline">Sign Up Now</span>
        </p>
      </Link>
    </div>
  );
};

export default Promobar;
