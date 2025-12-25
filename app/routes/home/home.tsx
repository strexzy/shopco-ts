import { AppSidebar } from "~/components/shared/app-sidebar";
import Header from "~/components/shared/header";
import Promobar from "~/components/shared/promobar";
import { SidebarProvider } from "~/components/ui/sidebar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SHOP.CO Clothing website" },
    { name: "description", content: "Welcome to SHOP.CO!" },
  ];
}

export default function Home() {
  return (
    <SidebarProvider>
      <div className="w-full flex flex-col">
        <Promobar />
        <Header />
        <AppSidebar />
        <main className="bg-primary-grey">home</main>
      </div>
    </SidebarProvider>
  );
}
