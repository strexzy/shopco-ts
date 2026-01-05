type PriceProps = {
  price: number;
  discountPrice?: number;
};

export const Price = ({ price, discountPrice }: PriceProps) => {
  if (discountPrice)
    return (
      <div className="flex items-center gap-1.25">
        <p className="text-black text-xl font-medium">${discountPrice}</p>
        <p className="text-gray-400 line-through text-xl font-medium">
          ${price}
        </p>
        <div className="px-2 py-0.75 bg-red-100 rounded-4xl">
          <p className="text-red-500 text-[10px]">
            -{Math.ceil(((price - discountPrice) / price) * 100)}%
          </p>
        </div>
      </div>
    );
  return <p className="text-black text-xl font-medium">${price}</p>;
};
