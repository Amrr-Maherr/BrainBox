import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  View,
  FlatList,
} from "react-native";
import { ThemedView } from "@/components/themed-view";
import BackButton from "@/components/BackButton";
import BrainBoxTitle from "@/components/BrainBoxTitle";
import AiCard from "@/components/AiCard";
import InputWithButton from "@/components/InputWithButton";

interface AiItem {
  title: string;
  iconName: string;
  iconColor: string;
}

export default function HomeScreen() {
const aiData: AiItem[] = [
  {
    title: "Remembers previous messages for context-aware replies.",
    iconName: "history-edu",
    iconColor: "#007AFF",
  },
  {
    title: "Allows follow-up corrections to improve accuracy.",
    iconName: "edit",
    iconColor: "#FF9500",
  },
  {
    title: "Knows general world knowledge up to 2021.",
    iconName: "public",
    iconColor: "#34C759",
  },
  {
    title: "Generates fast and efficient responses.",
    iconName: "bolt",
    iconColor: "#FF2D55",
  },
  {
    title: "May occasionally provide inaccurate or biased content.",
    iconName: "warning",
    iconColor: "#FFCC00",
  },
];


  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView
          lightColor="#FFFFFF"
          darkColor="#141718"
          style={styles.container}
        >
          <View style={styles.backButtonWrapper}>
            <BackButton />
          </View>
          <BrainBoxTitle />
          <View style={styles.listContainer}>
            <FlatList
              data={aiData}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <AiCard
                  title={item.title}
                  icon={item.iconName}
                  iconColor={item.iconColor}
                />
              )}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={styles.flatListContent}
            />
          </View>
          <InputWithButton />
        </ThemedView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 35,
  },
  backButtonWrapper: {
    width: "100%",
    marginTop: 40,
  },
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 100,
  },
});
