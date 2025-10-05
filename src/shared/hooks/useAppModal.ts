import { createElement } from "react";
import { useModalStore } from "../store/modal-store";
import { Ionicons } from "@expo/vector-icons";
import { SelectionModal } from "../components/Modals/SelecionModal";

interface SelectionOption {
  text: string;
  onPres: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: "primnaty" | "secundary" | "danger";
}

export const useAppModal = () => {
  const { open, close } = useModalStore();

  const showSelection = (config: {
    title: string;
    message?: string;
    options: SelectionOption[];
  }) => {
    open(createElement(SelectionModal));
  };

  return { showSelection };
};
