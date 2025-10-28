import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import Middleware from "@/Middleware/Middleware";

export default function WelcomeScreen() {
  return (
    <Middleware>
      <ThemedView
        style={styles.container}
        lightColor="#F7F8FA"
        darkColor="#141718"
      >
        <ThemedText style={styles.title} lightColor="#000000" darkColor="#fff">
          BrainBox
        </ThemedText>
        <ThemedText
          style={styles.subtitle}
          lightColor="#757171"
          darkColor="#ccc"
        >
          Version 1.0
        </ThemedText>
      </ThemedView>
    </Middleware>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 35,
    fontWeight: "medium",
    fontFamily: "Poppins_400Regular",
  },
  subtitle: {
    fontSize: 24,
    textAlign: "center",
    position: "absolute",
    bottom: 39,
    fontFamily: "Poppins_300Light",
  },
});
