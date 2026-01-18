import { Link } from "react-router";
import Icon from "~/assets/icons/basic/logo.svg";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/">
      <img
        src={Icon}
        alt="SHOP.CO Logo"
        className={`max-w-31.5 w-full ${className}`}
      />
    </Link>
  );
};
