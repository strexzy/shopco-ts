export interface ProductListProduct {
  id: string;
  slug: string;
  name: string;
  price: number;
  discountPrice?: number;
  images: string[];
  rating: number;
}

export type ProductList = ProductListProduct[];
