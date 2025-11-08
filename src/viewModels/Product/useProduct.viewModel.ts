import { useGetProductDetailQuery } from "../../shared/queries/product/use-get-product-detail";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetail,
    isLoading,
    error,
  } = useGetProductDetailQuery(productId);

  return {
    isLoading,
    productDetail,
    error,
  };
};
