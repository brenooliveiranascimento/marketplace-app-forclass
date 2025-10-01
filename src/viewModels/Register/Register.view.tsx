import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { Controller } from "react-hook-form";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  return (
    <View className="flex-1  justify-center">
      <AuthFormHeader
        title="Crie sua conta"
        subTitle="Informe os seus dados pessoais e de acesso"
      />
      <AppInputController
        leftIcon="mail-outline"
        label="E-MAIL"
        control={control}
        name="email"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
