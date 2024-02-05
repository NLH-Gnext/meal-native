import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, color, icon }) => {
  return (
    <Pressable>
      <Ionicons
        onPress={onPress}
        name={icon}
        color={color}
        size={24}
        style={({ pressed }) => pressed && styles.pressed}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
