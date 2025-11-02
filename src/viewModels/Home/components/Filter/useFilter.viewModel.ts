import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories";

export const useFilterViewModel = () => {
  const {
    data: productsCategory,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery();

  return {
    productsCategory,
    isLoading,
  };
};
