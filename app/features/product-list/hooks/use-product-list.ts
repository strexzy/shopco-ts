import { useCallback, useEffect, useState } from "react";
import { safeAxiosError } from "~/shared";
import { productListApi } from "../api/product-list-api";
import type { ProductList } from "../api/product-list-api.types";

export function useProductList(listEndpoint: string) {
  const [data, setData] = useState<ProductList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await productListApi.getList(listEndpoint);
      setData(response.data);
      return response.data;
    } catch (e) {
      const msg = safeAxiosError(e);
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  }, [listEndpoint]);

  useEffect(() => {
    let mounted = true;
    setData(null);
    (async () => {
      try {
        await fetch();
        if (!mounted) return;
      } catch {
        // error already handled in fetch
      }
    })();
    return () => {
      mounted = false;
    };
  }, [fetch]);

  return {
    data,
    loading,
    error,
    refetch: fetch,
  };
}
