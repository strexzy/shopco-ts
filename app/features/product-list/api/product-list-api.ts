import axios from "axios";
import type { ProductList } from "./product-list-api.types";

export const productListApi = {
  getList: (listEndpoint: string) => axios.get<ProductList>(listEndpoint),
};
