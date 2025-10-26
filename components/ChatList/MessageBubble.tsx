import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MessageBubbleProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  isUser?: boolean;
  isDark?: boolean;
}

export default function MessageBubble({
  text,
  backgroundColor,
  textColor,
  isUser,
}: MessageBubbleProps) {
  return (
    <View
      style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.botBubble,
        { backgroundColor },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "80%",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  userBubble: {
    borderTopRightRadius: 4,
  },
  botBubble: {
    borderTopLeftRadius: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
  },
});
