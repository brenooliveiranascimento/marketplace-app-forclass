import { FC } from "react";
import { Text, View } from "react-native";

interface AddToCartSuccessModalParams {
  productName: string;
  onGoToCart: () => void;
  onClose: () => void;
  onContinueShopping: () => void;
}

export const AddToCartSuccessModal: FC<AddToCartSuccessModalParams> = ({
  onClose,
  onContinueShopping,
  onGoToCart,
  productName,
}) => {
  return (
    <View className="bg-white rounded-xl p-6 w-full mx-w-sm">
      <Text>{productName} foi adicionado ao carrinho!</Text>
    </View>
  );
};
