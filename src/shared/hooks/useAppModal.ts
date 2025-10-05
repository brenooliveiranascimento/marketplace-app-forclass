import { createElement } from "react";
import { useModalStore } from "../store/modal-store";
import { Ionicons } from "@expo/vector-icons";
import {
  SelectionModal,
  SelectionModalProps,
} from "../components/Modals/SelecionModal";

export type SelectionVariant = "primary" | "secundary" | "danger";

export interface SelectionOption {
  text: string;
  onPres: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: SelectionVariant;
}

export const useAppModal = () => {
  const { open, close } = useModalStore();

  const showSelection = ({
    options,
    title,
    message,
  }: {
    title: string;
    message?: string;
    options: SelectionOption[];
  }) => {
    open(
      createElement(SelectionModal, {
        options,
        title,
        message,
      } as SelectionModalProps)
    );
  };

  return { showSelection };
};
