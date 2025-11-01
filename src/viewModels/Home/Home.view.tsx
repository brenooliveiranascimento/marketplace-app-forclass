import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { ProductInterface } from "../../shared/interfaces/product";
import { ProductCard } from "./components/ProductCard";
import { FC } from "react";
import { useHomeViewModel } from "./useHome.viewModel";
import { Footer } from "./components/Footer";
import { useUserStore } from "../../shared/store/user-store";

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  products,
  handleEnReached,
  hasNextPage,
  isLoading,
  isFetchingNextPage,
}) => {
  console.log({ hasNextPage, isLoading, isFetchingNextPage });

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        numColumns={2}
        ListFooterComponent={
          <Footer
            isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}
          />
        }
        onEndReached={handleEnReached}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  );
};
