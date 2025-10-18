import { StyleSheet, View, Text} from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function WelcomeScreen() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/On-Boarding-1"); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrainBox</Text>
      <Text style={styles.subtitle}>Version 1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    position: "relative",
  },
  title: {
    fontSize: 35,
    fontWeight: "medium",
    fontFamily: "Poppins_400Regular",
  },
  subtitle: {
    fontSize: 24,
    color: "#757171",
    textAlign: "center",
    position: "absolute",
    bottom: 39,
    fontFamily: "Poppins_300Light",
  },
});
