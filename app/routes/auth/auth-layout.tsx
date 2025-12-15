import { Outlet } from "react-router";
import type { Route } from "../+types/home";
import Logo from "~/assets/icons/basic/logo.svg";
import { useAuth } from "~/context/AuthContext";
import { Spinner } from "~/components/ui/spinner";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "SHOP.CO Authentication page" },
    { name: "description", content: "Welcome to SHOP.CO!" },
  ];
}

export default function Auth() {
  const { currentUser } = useAuth();

  return (
    <main className="w-full h-screen bg-primary-grey flex flex-col justify-center items-center gap-10">
      <img src={Logo} alt="SHOP.CO Logo" className="w-70 " />
      {typeof currentUser === "undefined" ? <Spinner /> : <Outlet />}
    </main>
  );
}
