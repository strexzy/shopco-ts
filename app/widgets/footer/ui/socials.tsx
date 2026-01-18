import { Link } from "react-router";
import FacebookLogo from "~/assets/icons/social/facebook.svg";
import GithubLogo from "~/assets/icons/social/github.svg";
import InstagramLogo from "~/assets/icons/social/instagram.svg";
import TwitterLogo from "~/assets/icons/social/twitter.svg";

const Socials = () => {
  return (
    <div className="flex gap-3">
      <Link
        className="border border-gray-500 rounded-full w-7 h-7 flex justify-center items-center"
        to="/"
      >
        <img src={TwitterLogo} alt="Twitter logo" />
      </Link>
      <Link
        className="bg-black border border-black rounded-full w-7 h-7 flex justify-center items-center"
        to="/"
      >
        <img src={FacebookLogo} alt="Facebook logo" />
      </Link>
      <Link
        className="border border-gray-500 rounded-full w-7 h-7 flex justify-center items-center"
        to="/"
      >
        <img src={InstagramLogo} alt="Instagram logo" />
      </Link>
      <Link
        className="border border-gray-500 rounded-full w-7 h-7 flex justify-center items-center"
        to="/"
      >
        <img src={GithubLogo} alt="Github logo" />
      </Link>
    </div>
  );
};

export default Socials;
