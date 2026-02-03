import { Spinner } from "~/shared";
import type { ProductList as ProductListType } from "../api/product-list-api.types";
import ProductListCard from "./product-list-card";

type ProductListProps = {
  productList: ProductListType | null;
  error?: string;
  itemsQuantity?: number;
  className?: string;
};

const ProductList = ({
  productList,
  error,
  itemsQuantity,
  className,
}: ProductListProps) => {
  if (productList === null || error) {
    return (
      <div className="w-full h-full flex flex-col items-center gap-3">
        <Spinner />
        <p>{error ? error : "Unknown error, please try again later..."}</p>
      </div>
    );
  }

  if (itemsQuantity)
    return (
      <div className={className}>
        {productList.slice(0, itemsQuantity).map((product) => (
          <ProductListCard key={product.id} product={product} />
        ))}
      </div>
    );

  return (
    <div className={className}>
      {productList.map((product) => (
        <ProductListCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
