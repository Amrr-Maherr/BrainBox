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
import { Image } from "expo-image";

interface AiItem {
  title: string;
  iconName: string;
  iconColor: string;
}

export default function Main() {
const aiData: AiItem[] = [
  { title: "Remembers chats", iconName: "history-edu", iconColor: "#007AFF" },
  { title: "Learns from corrections", iconName: "edit", iconColor: "#FF9500" },
  { title: "World knowledge", iconName: "public", iconColor: "#34C759" },
  { title: "Fast replies", iconName: "bolt", iconColor: "#FF2D55" },
  {
    title: "Unique answers sometimes",
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
