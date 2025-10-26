import { useMutation } from "@tanstack/react-query";
import { uploadAvatar } from "../../services/auths.service";
import { Toast } from "toastify-react-native";

export const useUploadAvarMutation = () => {
  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
      Toast.error("Erro ao fazer upload da foto de perfil");
    },
  });

  return mutation;
};
