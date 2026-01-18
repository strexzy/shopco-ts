import { Outlet } from "react-router";
import { SidebarProvider, useIsMobile } from "~/shared";
import { AppSidebar, Footer, Header, Promobar } from "~/widgets";

const Shop = () => {
  return (
    <SidebarProvider>
      <div className="w-full flex flex-col">
        <Promobar />
        <Header />
        {useIsMobile() && <AppSidebar />}
        <main className="w-full h-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Shop;
