import { useProductIniniteQuery } from "../../shared/queries/product/use-product-infinite.query";
import { useUserStore } from "../../shared/store/user-store";

export const useHomeViewModel = () => {
  const {
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
    products,
  } = useProductIniniteQuery();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  const handleRefresh = async () => {
    await refetch();
  };

  console.log(JSON.stringify(products, null, 2));
  return {
    handleLoadMore,
    handleRefresh,
    products,
  };
};
