import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedButton } from "./themed-button";
import { useRouter } from "expo-router";

export default function BackButton() {
        const router = useRouter();
  return (
    <ThemedButton
      lightColor="#ffffff"
      darkColor="#232627"
      style={styles.backButton}
      icon={<Ionicons name="chevron-back" size={22} color="#757474" />}
      text=""
      onPress={() => router.back()}
    />
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});
