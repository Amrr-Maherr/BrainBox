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
import TypesList from "@/components/TypesList/TypesList";

const Categories = [
  { title: "All", icon: "category" },
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
  { title: "Facebook", icon: "thumb-up", text: "Gen Text: Facebook" },
  { title: "Instagram", icon: "photo-camera", text: "Gen Text: Instagram" },
  { title: "X (Twitter)", icon: "chat", text: "Gen Text: Twitter" },
  { title: "LinkedIn", icon: "business-center", text: "Gen Text: LinkedIn" },
  { title: "YouTube", icon: "ondemand-video", text: "Gen Text: YouTube" },
  { title: "TikTok", icon: "music-note", text: "Gen Text: TikTok" },
  { title: "Snapchat", icon: "camera-alt", text: "Gen Text: Snapchat" },
  { title: "Pinterest", icon: "push-pin", text: "Gen Text: Pinterest" },
  { title: "Reddit", icon: "forum", text: "Gen Text: Reddit" },
  { title: "WhatsApp", icon: "chat-bubble", text: "Gen Text: WhatsApp" },
];

const SportsSocialMedia = [
  { title: "ESPN", icon: "sports-soccer", text: "Gen Text: ESPN" },
  { title: "Nike", icon: "directions-run", text: "Gen Text: Nike" },
  { title: "NBA", icon: "sports-basketball", text: "Gen Text: NBA" },
  { title: "FIFA", icon: "stadium", text: "Gen Text: FIFA" },
  { title: "B. Report", icon: "sports-score", text: "Gen Text: Report" },
  { title: "RBR", icon: "directions-car", text: "Gen Text: RBR" },
];

const HealthSocialMedia = [
  { title: "WHO", icon: "health-and-safety", text: "Gen Text: WHO" },
  { title: "Mayo", icon: "local-hospital", text: "Gen Text: Mayo" },
  { title: "WebMD", icon: "medical-services", text: "Gen Text: WebMD" },
  { title: "CDC", icon: "coronavirus", text: "Gen Text: CDC" },
  { title: "FitBlend", icon: "fitness-center", text: "Gen Text: FitBlend" },
  { title: "MyFitPal", icon: "scale", text: "Gen Text: MyFitPal" },
];



export default function HomeScreen() {
  const colors = useColorScheme();
  const textColor = colors === "dark" ? "#FFFFFF" : "#141718";
  const router = useRouter();
  const goToChat = () => router.push("/Main");

  return (
    <ThemedView
      lightColor="#FFFFFF"
      darkColor="#141718"
      style={styles.container}
    >
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
            style={{
              fontSize: 22,
              fontWeight: "600",
              color: colors === "dark" ? "#FFFFFF" : "#000000",
            }}
          >
            Ai Assistant
          </Text>
          <BackButton />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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
            <CategoriesList Categories={Categories} />
          </View>
          <View
            style={{
              gap: 33,
              alignItems: "center",
              width: "100%",
              paddingTop: 46,
            }}
          >
            <TypesList Types={SocialMedia} TypesTitle="Social Media" />
          </View>
          <View
            style={{
              gap: 33,
              alignItems: "center",
              width: "100%",
              paddingTop: 46,
            }}
          >
            <TypesList Types={SportsSocialMedia} TypesTitle="Health" />
          </View>
          <View
            style={{
              gap: 33,
              alignItems: "center",
              width: "100%",
              paddingTop: 46,
            }}
          >
            <TypesList Types={HealthSocialMedia} TypesTitle="Sports" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 25 },
});
