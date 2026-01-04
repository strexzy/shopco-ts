export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  brand: string;
  price: number;
  discountPrice?: number;
  size: string[];
  color: string[];
  images: string[];
  rating: number;
  reviewsCount: number;
  stock: number;
  isAvailable: boolean;
  sku: string;
  deliveryInfo: string;
  isFavorite?: boolean;
  isInCart?: boolean;
  isOutOfStock?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductState {
  product: Product | null;
  productError: string | null;
}

export interface ProductActions {
  setProduct: (product: Product) => void;
  setProductError: (productError: string) => void;
}

export interface ProductStore extends ProductState {
  actions: ProductActions;
}
