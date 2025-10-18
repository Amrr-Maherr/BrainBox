import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/On-Boarding-1");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ThemedView
      style={styles.container}
      lightColor="#F7F8FA"
      darkColor="#141718"
    >
      <ThemedText style={styles.title} lightColor="#000000" darkColor="#fff">
        BrainBox
      </ThemedText>
      <ThemedText style={styles.subtitle} lightColor="#757171" darkColor="#ccc">
        Version 1.0
      </ThemedText>
    </ThemedView>
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
