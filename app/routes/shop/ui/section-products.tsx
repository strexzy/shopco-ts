import { ProductList } from "~/features";
import { Button } from "~/shared";
import { PRODUCTS_ENDPOINTS } from "~/shared/constants/constants";

const Products = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="mx-4 flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <h2 className="text-[32px] text-black font-extrabold text-center">
            NEW ARRIVALS
          </h2>
          <ProductList
            listEndpoint={PRODUCTS_ENDPOINTS.NEW_ARRIVALS}
            itemsQuantity={4}
            className="flex gap-4 overflow-scroll"
          />
          <Button variant="outline" className="w-full h-13 rounded-full">
            View all
          </Button>
        </div>
        <span className="block border border-gray-200 w-full"></span>
        <div className="flex flex-col gap-8">
          <h2 className="text-[32px] text-black font-extrabold text-center">
            TOP SELLING
          </h2>
          <ProductList
            listEndpoint={PRODUCTS_ENDPOINTS.TOP_SELLING}
            itemsQuantity={4}
            className="flex gap-4 overflow-scroll"
          />
          <Button variant="outline" className="w-full h-13 rounded-full">
            View all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
