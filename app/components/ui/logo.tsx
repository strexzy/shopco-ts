import { Link } from "react-router";
import Icon from "~/assets/icons/basic/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={Icon} alt="SHOP.CO Logo" className="max-w-31.5 w-full" />
    </Link>
  );
};

export default Logo;
