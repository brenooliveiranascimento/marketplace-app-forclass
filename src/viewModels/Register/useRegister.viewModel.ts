import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerScheme } from "./register.scheme";

export const useRegisterViewModel = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      phone: "",
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(({}) => {});

  return {
    control,
    errors,
    onSubmit,
  };
};
