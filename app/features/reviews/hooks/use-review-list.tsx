import { useCallback, useEffect, useState } from "react";
import { type ReviewList, reviewApi } from "~/entities";
import { safeAxiosError } from "~/shared";

export function useReviewList(productId: string) {
  const [data, setData] = useState<ReviewList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await reviewApi.getReviewList({ productId });
      setData(response.data);
      return response.data;
    } catch (e) {
      const msg = safeAxiosError(e);
      setError(msg);
      return msg;
    } finally {
      setLoading(false);
    }
  }, [productId]);

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
