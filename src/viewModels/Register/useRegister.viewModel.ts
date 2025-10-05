import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerScheme } from "./register.scheme";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { useAppModal } from "../../shared/hooks/useAppModal";
import { useCamera } from "../../shared/hooks/useCamera";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore();
  const modals = useAppModal();
  const { openCamera } = useCamera({});

  const handleSelectAvatar = () => {
    modals.showSelection({
      title: "Selenionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "images",
          variant: "primary",
          onPres: () => alert("Galeria"),
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPres: openCamera,
        },
      ],
    });
  };

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

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;
    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    );
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    });
  });

  return {
    control,
    errors,
    onSubmit,
    handleSelectAvatar,
  };
};
