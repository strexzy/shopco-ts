import { useLoaderData } from "react-router";
import { ProductList } from "~/features";
import { Button } from "~/shared";

const Products = () => {
  const { newArrivals, topSelling } = useLoaderData();
  return (
    <div className="bg-white overflow-hidden">
      <div className="mx-4 flex flex-col gap-10">
        <div className="flex flex-col gap-8 md:items-center">
          <h2 className="text-[32px] text-black font-extrabold text-center">
            NEW ARRIVALS
          </h2>
          <ProductList
            productList={newArrivals}
            itemsQuantity={4}
            className="flex gap-4 overflow-scroll"
          />
          <Button
            variant="outline"
            className="w-full h-13 rounded-full md:w-1/4"
          >
            View all
          </Button>
        </div>
        <span className="block border border-gray-200 w-full"></span>
        <div className="flex flex-col gap-8 md:items-center">
          <h2 className="text-[32px] text-black font-extrabold text-center">
            TOP SELLING
          </h2>
          <ProductList
            productList={topSelling}
            itemsQuantity={4}
            className="flex gap-4 overflow-scroll"
          />
          <Button
            variant="outline"
            className="w-full h-13 rounded-full md:w-1/4"
          >
            View all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
