import { Text, TouchableOpacity, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInput } from "../../shared/components/AppInput";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          subTitle="Informe seu e-mail e senha para entrar"
          title="Acesse sua conta"
        />

        <AppInputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          label="E-MAIL"
          placeholder="mail@exemple.com.be"
        />

        <AppInputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          placeholder="Sua senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Registro</Text>
        </TouchableOpacity>

        <AppButton>Teste</AppButton>
      </View>
    </KeyboardContainer>
  );
};
