import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { buttonVariants, ButtonVatiants } from "./button.variants";
import { FC, ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";

interface AppButtonProps extends TouchableOpacityProps, ButtonVatiants {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  children: string;
}

export const AppButton: FC<AppButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  variant = "field",
  isLoading,
  isDisabled,
  ...rest
}) => {
  const contentColor =
    variant === "field" ? colors.white : colors["purple-base"];

  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isDisabled,
    isLoading,
    variant,
  });

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size={"small"} color={contentColor} />;
    }

    return (
      <>
        {leftIcon && <Ionicons name={leftIcon} color={contentColor} />}

        <Text className={styles.text()}>{children}</Text>

        {rightIcon && (
          <Ionicons name={rightIcon} color={contentColor} size={20} />
        )}
      </>
    );
  };

  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
};
