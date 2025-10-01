import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { Controller } from "react-hook-form";
import { AppInputController } from "../../shared/components/AppInputController";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  return (
    <View className="flex-1  justify-center">
      <AppInputController
        leftIcon="mail-outline"
        label="E-MAIL"
        control={control}
        name="email"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
