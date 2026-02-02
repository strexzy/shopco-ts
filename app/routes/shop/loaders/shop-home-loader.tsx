import type { ReviewList } from "~/entities";
import { reviewApi } from "~/entities";
import { productListApi } from "~/features/product-list/api/product-list-api";
import type { ProductList } from "~/features/product-list/api/product-list-api.types";
import { API_URL, PRODUCTS_ENDPOINTS, safeAxiosError } from "~/shared";

export interface ShopHomeLoaderData {
  newArrivals: ProductList | null;
  topSelling: ProductList | null;
  reviewList: ReviewList | null;
  error?: string;
}

export const shopHomeLoader = async (): Promise<ShopHomeLoaderData> => {
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
    } satisfies ShopHomeLoaderData;
  } catch (error) {
    // Logic for potential api bug report
    const msg = safeAxiosError(error);
    // throw new Response("Failed to load data", {
    //   status: 500,
    //   statusText: msg,
    // });
    return {
      newArrivals: null,
      topSelling: null,
      reviewList: null,
      error: msg,
    };
  }
};
