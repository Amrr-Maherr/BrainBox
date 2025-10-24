// BrainBoxTitle.tsx
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";

export default function BrainBoxTitle() {
  return (
    <View style={styles.container}>
      <ThemedText lightColor="#FF" darkColor="#757474" style={styles.text}>
        BrainBox
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 55, marginBottom: 50 },
  text: { textAlign: "center", fontSize: 50, fontWeight: "600" },
});
