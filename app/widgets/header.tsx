import CartIcon from "~/assets/icons/basic/cart.svg";
import SearchIcon from "~/assets/icons/basic/search.svg";
import UserIcon from "~/assets/icons/basic/user.svg";
import { Logo, SidebarTrigger } from "~/shared";

const Header = () => {
  return (
    <header className="flex px-4 py-5 justify-between items-center">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <img src={SearchIcon} alt="Search icon" />
        <img src={CartIcon} alt="Cart icon" />
        <img src={UserIcon} alt="User icon" />
      </div>
    </header>
  );
};

export default Header;
