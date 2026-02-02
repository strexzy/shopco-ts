import type { ProductList as ProductListType } from "../api/product-list-api.types";
import { useProductList } from "../hooks/use-product-list";
import ProductListCard from "./product-list-card";

type ProductListProps = {
  productList: ProductListType;
  itemsQuantity?: number;
  className?: string;
};

const ProductList = ({
  productList,
  itemsQuantity,
  className,
}: ProductListProps) => {
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
