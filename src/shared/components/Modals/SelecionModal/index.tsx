import { Text, TouchableOpacity, View } from "react-native";
import { SelectionOption, SelectionVariant } from "../../../hooks/useAppModal";
import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";
import { colors } from "../../../../styles/colors";

export interface SelectionModalProps {
  title: string;
  message?: string;
  options: SelectionOption[];
}

export const SelectionModal: FC<SelectionModalProps> = ({
  options,
  title,
  message,
}) => {
  const getButtonClass = (variant: SelectionVariant) =>
    clsx(
      "w-full py-3 px-4 rounded-lg items-center flex-row justify-center mb-2",
      {
        "bg-danger": variant === "danger",
        "bg-blue-dark": variant === "secundary",
        "bg-purple-base": variant === "primary",
      }
    );

  return (
    <View className="bg-white rounded-xl shadow-2xl w-[85%] mx-auto max-w-sm p-6">
      <View className="items-center">
        <Text className="text-lg font-bold text-gray-900 mb-3">{title}</Text>

        {message && (
          <Text className="text-base text-gray-600 mb-6 leading-6">
            {message}
          </Text>
        )}
      </View>

      <View className="gap-3">
        {options.map((option, index) => (
          <TouchableOpacity
            key={`selecion-item-${index}`}
            onPress={option.onPres}
            className={getButtonClass(option.variant ?? "primary")}
          >
            {option.icon && (
              <Ionicons
                name={option.icon}
                size={20}
                color={colors.white}
                className="mr-2"
              />
            )}
            <Text className="font-semibold text-white">{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
