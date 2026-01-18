import { Logo } from "~/shared";
import Links from "./ui/nav-links-list";
import OffersForm from "./ui/offers-form";
import Socials from "./ui/socials";
import PaymentLogos from "./ui/payment-logos";

const Footer = () => {
  return (
    <footer className="bg-primary-grey mt-12.5 flex flex-col gap-12.5">
      <OffersForm />
      <div className="mx-4 flex justify-between flex-wrap gap-6.25">
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-3.5">
            <Logo />
            <p className="max-w-62 text-gray-500 text-sm font-light">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <Socials />
        </div>
        <Links />
      </div>
      <div className="flex flex-col gap-4">
        <span className="mx-4 block h-px bg-gray-500" />
        <div className="mx-4 flex flex-wrap justify-center items-center gap-4">
          <p className="text-sm text-gray-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <PaymentLogos />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
