import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { appInputVariants } from "./input.variants";
import { Ionicons } from "@expo/vector-icons";

export const AppInput = () => {
  const styles = appInputVariants();

  return (
    <View>
      <Pressable>
        <Ionicons name="person" />

        <TextInput />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
