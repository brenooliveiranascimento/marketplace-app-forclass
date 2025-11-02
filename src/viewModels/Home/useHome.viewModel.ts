import { useProductIninityQuery } from "../../shared/queries/product/use-product-infinite.query";
import { useFilterStore } from "../../shared/store/use-filter-store";
import { useUserStore } from "../../shared/store/user-store";

export const useHomeViewModel = () => {
  const { appliedFilterState } = useFilterStore();

  const {
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
    products,
  } = useProductIninityQuery({
    filters: appliedFilterState,
  });

  console.log({ isLoading });
  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  const handleRefresh = async () => {
    await refetch();
  };

  const handleEnReached = () => {
    handleLoadMore();
  };

  return {
    handleLoadMore,
    handleRefresh,
    products,
    handleEnReached,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
};
