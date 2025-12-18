import { Outlet } from "react-router";
import type { Route } from "../+types/home";
import Logo from "~/assets/icons/basic/logo.svg";
import AuthRouteWrapper from "~/components/auth/AuthRouteWrapper";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "SHOP.CO Authentication page" },
    { name: "description", content: "Welcome to SHOP.CO!" },
  ];
}

export default function Auth() {
  return (
    <AuthRouteWrapper>
      <main className="w-full h-screen bg-primary-grey flex flex-col justify-center items-center gap-10">
        <img src={Logo} alt="SHOP.CO Logo" className="w-70 " />
        {<Outlet />}
      </main>
    </AuthRouteWrapper>
  );
}
// Future plans: add the "showpass" button, add forgot pass, add login through socials
