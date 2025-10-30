import AiCard from "@/components/AiCard";
import BackButton from "@/components/BackButton";
import BrainBoxTitle from "@/components/BrainBoxTitle";
import ChatList from "../components/ChatList/ChatList";
import InputWithButton from "@/components/InputWithButton";
import { ThemedView } from "@/components/themed-view";
import type { RootState } from "@/ReduxStore/store";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { clearChat } from "@/ReduxStore/ChatSlice";

interface AiItem {
  title: string;
  iconName: string;
  iconColor: string;
}

export default function Main() {
  const aiData: AiItem[] = [
    { title: "Remembers chats", iconName: "history-edu", iconColor: "#007AFF" },
    {
      title: "Learns from corrections",
      iconName: "edit",
      iconColor: "#FF9500",
    },
    { title: "World knowledge", iconName: "public", iconColor: "#34C759" },
    { title: "Fast replies", iconName: "bolt", iconColor: "#FF2D55" },
    {
      title: "Unique answers sometimes",
      iconName: "warning",
      iconColor: "#FFCC00",
    },
  ];

  const dispatch = useDispatch();
  const { chat, loading } = useSelector((state: RootState) => state.chat);

  const handleClearChat = () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to clear the chat?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes, Clear",
          onPress: () => dispatch(clearChat()),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const handleSaveChat = () => {
    Alert.alert("Save Chat", "This feature will be available soon!");
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <ThemedView
        lightColor="#FFFFFF"
        darkColor="#141718"
        style={styles.container}
      >
        <View style={styles.header}>
          <BackButton />
          <View style={styles.iconGroup}>
            {/* <TouchableOpacity
              disabled={chat.length === 0}
              onPress={handleSaveChat}
              style={[
                styles.iconButton,
                { opacity: chat.length > 0 ? 1 : 0.5 },
              ]}
            >
              <Icon name="bookmark-outline" size={26} color="#007AFF" />
            </TouchableOpacity> */}

            <TouchableOpacity
              disabled={chat.length === 0}
              onPress={handleClearChat}
              style={[
                styles.iconButton,
                { opacity: chat.length > 0 ? 1 : 0.5 },
              ]}
            >
              <Icon name="delete-outline" size={26} color="#FF3B30" />
            </TouchableOpacity>
          </View>
        </View>

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        ) : chat.length > 0 ? (
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
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.flatListContent}
              />
            </View>
          </>
        )}

        <InputWithButton />
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    width: "100%",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
  },
  iconGroup: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 50,
  },
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
