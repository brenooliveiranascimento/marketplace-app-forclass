import { useMutation } from "@tanstack/react-query";
import { submitOrder } from "../../services/orders.service";
import { Toast } from "toastify-react-native";

export const useSubmitOrderMutation = () => {
  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (response) => {
      console.log(response.message);
    },
    onError: (error) => {
      console.log(error);
      Toast.error(error.message ?? "Falha ao realizar pedido", "top");
    },
  });

  return mutation;
};
