import { create } from "zustand";
import type { ProductState, ProductStore } from "./use-product-store.types";

const defaultValues: ProductState = {
  product: null,
  productError: null,
};

export const useProductStore = create<ProductStore>()((set) => ({
  ...defaultValues,
  actions: {
    setProduct: (newProduct) => set(() => ({ product: newProduct })),
    setProductError: (newError) => set(() => ({ productError: newError })),
  },
}));
