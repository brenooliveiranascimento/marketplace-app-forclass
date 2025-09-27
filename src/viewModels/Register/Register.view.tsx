import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1  justify-center">
      <AppInput
        leftIcon="mail-outline"
        label="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <AppInput leftIcon="lock-closed-outline" label="Senha" />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
