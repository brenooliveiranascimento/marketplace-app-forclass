import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { buttonVariants, ButtonVatiants } from "./button.variants";
import { FC, ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";

interface AppButtonProps extends TouchableOpacityProps, ButtonVatiants {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  children: string;
}

export const AppButton: FC<AppButtonProps> = ({
  leftIcon,
  children,
  ...rest
}) => {
  const styles = buttonVariants();

  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      <Text className={styles.text()}>{children}</Text>
    </TouchableOpacity>
  );
};
