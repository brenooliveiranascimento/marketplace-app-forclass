import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { buttonVariants, ButtonVatiants } from "./button.variants";
import { FC } from "react";

interface AppButtonProps extends TouchableOpacityProps, ButtonVatiants {}

export const AppButton: FC<AppButtonProps> = ({ ...rest }) => {
  const styles = buttonVariants();

  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      <Text>Teste</Text>
    </TouchableOpacity>
  );
};
