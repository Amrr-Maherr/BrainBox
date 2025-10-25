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
const Categorys = [
  { title: "Sports", icon: "sports-soccer" },
  { title: "Music", icon: "music-note" },
  { title: "News", icon: "newspaper" },
  { title: "Tech", icon: "developer-mode" },
  { title: "Health", icon: "health-and-safety" },
  { title: "Entertainment", icon: "theater-comedy" },
  { title: "Education", icon: "school" },
  { title: "Finance", icon: "account-balance-wallet" },
  { title: "Travel", icon: "flight" },
  { title: "Food", icon: "restaurant" },
  { title: "Books", icon: "menu-book" },
  { title: "Movies", icon: "movie" },
  { title: "Gaming", icon: "sports-esports" },
];
const SocialMedia = [
  { title: "Facebook", icon: "facebook" },
  { title: "Instagram", icon: "instagram" },
  { title: "X (Twitter)", icon: "twitter" }, // الأيقونة الرسمية لا تزال "twitter" في MaterialIcons
  { title: "LinkedIn", icon: "linkedin" },
  { title: "YouTube", icon: "youtube" },
  { title: "TikTok", icon: "music-note" }, // استخدمت أيقونة بديلة؛ لو عايزة مخصصة، أضيفي مكتبة أخرى
  { title: "Snapchat", icon: "camera-alt" }, // أيقونة بديلة للكاميرا
  { title: "Pinterest", icon: "image" }, // أيقونة بديلة للصور
  { title: "Reddit", icon: "reddit" }, // إذا كانت متوفرة، أو استخدمي "forum"
  { title: "WhatsApp", icon: "chat-bubble" }, // أيقونة بديلة للدردشة
];
const SportsSocialMedia = [
  { title: "ESPN", icon: "sports-soccer" },
  { title: "Nike", icon: "directions-run" },
  { title: "NBA", icon: "sports-basketball" },
  { title: "FIFA", icon: "stadium" },
  { title: "Bleacher Report", icon: "sports-score" },
  { title: "Red Bull Racing", icon: "directions-car" },
];
const HealthSocialMedia = [
  { title: "WHO", icon: "health-and-safety" },
  { title: "Mayo Clinic", icon: "local-hospital" },
  { title: "WebMD", icon: "medical-services" },
  { title: "CDC", icon: "coronavirus" },
  { title: "Fitness Blender", icon: "fitness-center" },
  { title: "MyFitnessPal", icon: "scale" },
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
