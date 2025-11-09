import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../../../../styles/colors";

interface StarsParams {
  rating: number;
}

export const Stars: FC<StarsParams> = ({ rating }) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isSelected = starNumber <= rating;

    return (
      <TouchableOpacity>
        <Ionicons
          size={32}
          name={isSelected ? "star" : "star-outline"}
          color={isSelected ? colors["purple-base"] : colors.gray["200"]}
        />
      </TouchableOpacity>
    );
  });
};
