import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  Image,
} from "react-native";
import { ThemedView } from "@/components/themed-view";
import BrainBoxTitle from "@/components/BrainBoxTitle";
import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";

const features = [
  {
    title: "Context-aware replies",
    icon: "history",
    lightColor: "#007AFF",
    darkColor: "#5AC8FA",
  },
  {
    title: "Follow-up corrections",
    icon: "edit",
    lightColor: "#FF9500",
    darkColor: "#FF9F0A",
  },
  {
    title: "General knowledge AI",
    icon: "public",
    lightColor: "#34C759",
    darkColor: "#30D158",
  },
  {
    title: "Fast & efficient",
    icon: "bolt",
    lightColor: "#FF2D55",
    darkColor: "#FF375F",
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const goToChat = () => router.push("/Main");

  return (
    <ThemedView
      lightColor="#FFFFFF"
      darkColor="#141718"
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <BrainBoxTitle />
        <ThemedText
          lightColor="#222"
          darkColor="#A0A0A5"
          style={styles.introText}
        >
          Welcome to BrainBox! {"\n\n"}
          Your AI assistant ready to help you with answers, advice, and
          guidance.
        </ThemedText>
        <View style={styles.featuresContainer}>
          {features.map((item, index) => (
            <ThemedView
              key={index}
              lightColor="#F7F7F8"
              darkColor="#232627"
              style={styles.featureCard}
            >
              <Icon
                name={item.icon}
                size={24}
                color={
                  colorScheme === "dark" ? item.darkColor : item.lightColor
                }
              />
              <ThemedText
                lightColor="#222"
                darkColor="#A0A0A5"
                style={styles.featureText}
              >
                {item.title}
              </ThemedText>
            </ThemedView>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={goToChat}>
          <Icon name="send" size={20} color="#fff" style={{ marginRight: 8 }} />
          <ThemedText
            lightColor="#fff"
            darkColor="#fff"
            style={styles.buttonText}
          >
            Start Chat
          </ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 25 },
  scroll: { paddingVertical: 60, alignItems: "center" },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 30,
  },
  featuresContainer: { width: "100%", marginBottom: 40 },
  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  featureText: { marginLeft: 12, fontSize: 14, fontWeight: "500" },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: { fontSize: 16, fontWeight: "600" },
  image: {
    width: 154,
    height: 184.35,
  },
});
