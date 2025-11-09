import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useProductViewModel } from "./useProduct.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/Header";
import { CommentItem } from "./components/CommentItem";
import { ListFooter } from "./components/ListFooter";
import { EmptyList } from "./components/EmptyList";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import { GetProductDetailInterface } from "../../shared/interfaces/http/product-detail";

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  error,
  isLoading,
  productDetails,
  getCommentsError,
  getCommentsLoading,
  handleEndReched,
  handleRefetch,
  comments,
  isRefetching,
  isFetchingNextPage,
}) => {
  if (error) return <Error />;

  if (isLoading) <Loading />;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={
          <Header
            productDetails={productDetails as GetProductDetailInterface}
          />
        }
        className="px-6"
        onEndReached={handleEndReched}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        ListFooterComponent={<ListFooter isLoadingMore={isFetchingNextPage} />}
        ListEmptyComponent={
          <EmptyList isLoadingComments={getCommentsLoading} />
        }
      />
    </SafeAreaView>
  );
};
