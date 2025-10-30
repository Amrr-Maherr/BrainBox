import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import MessageBubble from "../ChatList/MessageBubble";
import ChatActions from "./ChatActions";

interface ChatItem {
  user?: string;
  bot?: string;
  time?: string;
}

export default function ChatMessage({ item }: { item: ChatItem }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const time = item.time || new Date().toLocaleTimeString("en-EG");

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
            BrainBox • {time}
          </Text>

          <ChatActions message={item.bot!} isDark={isDark} />
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
});
