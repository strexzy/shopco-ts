import { http } from "~/shared";
import type { ProductList } from "./product-list-api.types";

export const productListApi = {
  getList: (listEndpoint: string) => http.get<ProductList>(listEndpoint),
};
