import { createElement } from "react";
import { useGetCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinite.query";
import { useGetProductDetailQuery } from "../../shared/queries/product/use-get-product-detail";
import { useCartStore } from "../../shared/store/cart-store";
import { useModalStore } from "../../shared/store/modal-store";
import { AddToCartSuccessModal } from "./components/AddToCartSuccessModal";
import { router } from "expo-router";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailQuery(productId);

  const {
    comments,
    isLoading: getCommentsLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: getCommentsError,
    isRefetching,
    isFetchingNextPage,
  } = useGetCommentsInfiniteQuery(productId);

  const { addProduct, products } = useCartStore();

  const { open, close } = useModalStore();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefetch = () => {
    if (!isRefetching) {
      refetch();
    }
  };

  const handleEndReched = () => {
    handleLoadMore();
  };

  const handleAddToCart = () => {
    if (!productDetails) return;
    console.log(productDetails, "aaa");

    addProduct({
      id: productDetails.id,
      name: productDetails.name,
      price: productDetails.value,
      image: productDetails.photo,
    });

    open(
      createElement(AddToCartSuccessModal, {
        productName: productDetails.name,
        onGoToCart: () => router.push("/(private)/(tabs)/cart"),
        onClose: close,
        onContinueShopping: () => router.push("/(private)/(tabs)/home"),
      })
    );
  };

  return {
    isLoading,
    productDetails,
    error,
    handleEndReched,
    handleRefetch,
    getCommentsLoading,
    getCommentsError,
    comments,
    isRefetching,
    isFetchingNextPage,
    handleAddToCart,
  };
};
