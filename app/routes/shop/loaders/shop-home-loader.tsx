import type { ReviewList } from "~/entities";
import { reviewApi } from "~/entities";
import { productListApi } from "~/features/product-list/api/product-list-api";
import type { ProductList } from "~/features/product-list/api/product-list-api.types";
import { API_URL, PRODUCTS_ENDPOINTS, safeAxiosError } from "~/shared";

export interface ShopHomeLoaderData {
  newArrivals: ProductList;
  topSelling: ProductList;
  reviewList: ReviewList;
}

export const shopHomeLoader = async () => {
  try {
    const [newArrivals, topSelling, reviewList] = await Promise.all([
      productListApi.getList(API_URL + PRODUCTS_ENDPOINTS.NEW_ARRIVALS),
      productListApi.getList(API_URL + PRODUCTS_ENDPOINTS.TOP_SELLING),
      reviewApi.getReviewList({ productId: "shopco" }),
    ]);

    return {
      newArrivals: newArrivals.data,
      topSelling: topSelling.data,
      reviewList: reviewList.data,
    };
  } catch (error) {
    const msg = safeAxiosError(error);
    throw new Response("Failed to load data", {
      status: 500,
      statusText: msg,
    });
  }
};
