import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useOrdersViewModel } from "./useOrders.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({
  orders,
}) => {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={orders}
        renderItem={({ item: order }) => <Text>{order.productName}</Text>}
      />
    </SafeAreaView>
  );
};
