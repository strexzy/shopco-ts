import { useProductList } from "../hooks/use-product-list";
import ProductListCard from "./product-list-card";

type ProductListProps = {
  listEndpoint: string;
  itemsQuantity?: number;
  className?: string;
};

const ProductList = ({
  listEndpoint,
  itemsQuantity,
  className,
}: ProductListProps) => {
  const { data: productList, loading, error } = useProductList(listEndpoint);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!productList || productList.length === 0)
    return <div>No products found</div>;

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
