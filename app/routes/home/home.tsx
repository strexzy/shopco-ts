import { Greeting } from "~/pages";
import { SidebarProvider, useIsMobile } from "~/shared";
import { AppSidebar, Header, Promobar } from "~/widgets";

export function meta() {
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
        {useIsMobile() && <AppSidebar />}
        <main className="w-full h-full py-10 bg-primary-grey">
          <Greeting />
        </main>
      </div>
    </SidebarProvider>
  );
}
