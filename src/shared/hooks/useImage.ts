import { ImagePickerOptions } from "expo-image-picker";
import { useAppModal } from "./useAppModal";
import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";

export const useImage = (pickerOptions: ImagePickerOptions = {}) => {
  const { openCamera, isLoading: cameraLoading } = useCamera(pickerOptions);
  const { openGallery, isLoading: galleryLoading } = useGallery(pickerOptions);

  const loading = Boolean(cameraLoading || galleryLoading);

  const modals = useAppModal();

  const handleSelectImage = () => {
    modals.showSelection({
      title: "Selenionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "images",
          variant: "primary",
          onPres: async () => {
            const imageUri = await openGallery();
            console.log(imageUri);
          },
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

  return {
    handleSelectImage,
    loading,
  };
};
