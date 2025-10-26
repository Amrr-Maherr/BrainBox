import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  Image,
  Text,
} from "react-native";
import { ThemedView } from "@/components/themed-view";
import BrainBoxTitle from "@/components/BrainBoxTitle";
import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import CategoriesList from "@/components/Categories/CategoriesList";

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
const Categories = [
  { title: "All", icon: "sports-soccer" },
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
  { title: "X (Twitter)", icon: "twitter" },
  { title: "LinkedIn", icon: "linkedin" },
  { title: "YouTube", icon: "youtube" },
  { title: "TikTok", icon: "music-note" },
  { title: "Snapchat", icon: "camera-alt" },
  { title: "Pinterest", icon: "image" },
  { title: "Reddit", icon: "reddit" },
  { title: "WhatsApp", icon: "chat-bubble" },
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
console.log(Categories, "Categories");
console.log(SocialMedia, "SocialMedia");
console.log(SportsSocialMedia, "SportsSocialMedia");
console.log(HealthSocialMedia, "HealthSocialMedia");

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
      {" "}
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            gap: 69,
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            flexDirection: "row-reverse",
            paddingTop: 49,
          }}
        >
          <Text
            style={{ fontSize: 22, fontWeight: "semibold", color: "white" }}
          >
            Ai Assistant
          </Text>
          <BackButton />
        </View>
        <View
          style={{
            gap: 69,
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            flexDirection: "row-reverse",
            paddingTop: 49,
          }}
        >
          <CategoriesList Categories={Categories}/>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 25 },
});
