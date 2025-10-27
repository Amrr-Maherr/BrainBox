import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  Alert,
} from "react-native";
import MessageBubble from "../ChatList/MessageBubble";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

interface ChatItem {
  user?: string;
  bot?: string;
  time?: string;
}

export default function ChatMessage({ item }: { item: ChatItem }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const time = item.time || new Date().toLocaleTimeString("en-EG");

  const copyText = async (text: string) => {
    await Clipboard.setStringAsync(text);
    Alert.alert("Copied!", "Text has been copied to clipboard.");
  };

  return (
    <View style={styles.messageBlock}>
      {item.user && (
        <View style={[styles.messageWrapper, { alignItems: "flex-end" }]}>
          <MessageBubble
            text={item.user}
            isUser
            isDark={isDark}
            backgroundColor={isDark ? "#007AFF" : "#007AFF"}
            textColor="#fff"
          />
          <Text
            style={[styles.timeText, { color: isDark ? "#8E8E93" : "#666" }]}
          >
            Me • {time}
          </Text>
        </View>
      )}

      {item.bot && (
        <View style={[styles.messageWrapper, { alignItems: "flex-start" }]}>
          <MessageBubble
            text={item.bot}
            isDark={isDark}
            backgroundColor={isDark ? "#2C2C2E" : "#ECECEC"}
            textColor={isDark ? "#EAEAEA" : "#1C1C1E"}
          />
          <Text
            style={[styles.timeText, { color: isDark ? "#8E8E93" : "#666" }]}
          >
            Bot • {time}
          </Text>

          {/* Interaction Icons: Copy, Like, Dislike, Share */}
          <View style={styles.reactionContainer}>
            <TouchableOpacity
              style={styles.reactionButton}
              onPress={() => copyText(item.bot!)}
            >
              <Ionicons
                name="copy-outline"
                size={20}
                color={isDark ? "#fff" : "#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionButton}>
              <Ionicons
                name="thumbs-up-outline"
                size={20}
                color={isDark ? "#fff" : "#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionButton}>
              <Ionicons
                name="thumbs-down-outline"
                size={20}
                color={isDark ? "#fff" : "#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionButton}>
              <Ionicons
                name="share-outline"
                size={20}
                color={isDark ? "#fff" : "#000"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  messageBlock: {
    marginBottom: 18,
  },
  messageWrapper: {
    marginBottom: 6,
  },
  timeText: {
    fontSize: 11,
    marginTop: 4,
  },
  reactionContainer: {
    flexDirection: "row",
    marginTop: 6,
    gap: 12,
  },
  reactionButton: {
    padding: 6,
    borderRadius: 12,
    backgroundColor: "transparent",
  },
});
