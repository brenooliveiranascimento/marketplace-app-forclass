import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProfileFormData, profileScheme } from "./profile.scheme";
import { useState } from "react";
import { useUserStore } from "../../shared/store/user-store";

export const useProfileViewModel = () => {
  const { user } = useUserStore();

  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileScheme),
    defaultValues: {
      phone: user?.phone ?? "",
      email: user?.email ?? "",
      name: user?.name ?? "",
      newPassword: undefined,
      password: undefined,
    },
  });

  const onSubmit = handleSubmit(async () => {});

  return { onSubmit, control, avatarUri };
};
