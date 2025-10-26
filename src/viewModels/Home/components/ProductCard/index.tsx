import { Text, View } from "react-native";
import { ProductInterface } from "../../../../shared/interfaces/product";
import { FC } from "react";

interface ProductCardParams {
  product: ProductInterface;
}

export const ProductCard: FC<ProductCardParams> = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};
