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
import type { RootState, AppDispatch } from "@/ReduxStore/store";
import { useSelector } from "react-redux";
import ChatList from "@/components/ChatList";
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
  const { chat, loading, error } = useSelector((state: RootState) => state.chat);
console.log(chat, "state");
console.log(error, "error");
// console.log(chat, "state");


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
          {chat.length ? (
            <ChatList />
          ) : (
            <>
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
                  showsHorizontalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled"
                  contentContainerStyle={styles.flatListContent}
                />
              </View>
            </>
          )}
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
    paddingHorizontal: 15,
  },
  backButtonWrapper: {
    width: "100%",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical:10
  },
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 100,
  },
});
