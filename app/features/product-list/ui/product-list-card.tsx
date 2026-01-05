import ProductImageExample from "~/assets/images/product-example.png";
import { Price } from "~/shared";

type ProductListCardProps = {
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    discountPrice?: number;
    images: string[];
    rating: number;
  };
};

// id & slug for navigation onclick logic

const ProductListCard = ({
  product: { id, slug, name, price, discountPrice, images, rating },
}: ProductListCardProps) => {
  return (
    <div className="shrink-0 max-w-49.5 w-full flex flex-col gap-2.5">
      <div className="w-full h-50 rounded-4xl bg-primary-grey flex justify-center items-center">
        <img className="w-fit h-fit" src={ProductImageExample} alt={name} />
        {/* SHOULD ADD HOVER IMAGES SLIDER */}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-black text-base font-medium">{name}</p>
        <p className="text-black text-base font-medium">Rating: {rating}</p>
        {/* RATING FEATURE CREATION NEEDED */}
        <Price price={price} discountPrice={discountPrice} />
      </div>
    </div>
  );
};

export default ProductListCard;
