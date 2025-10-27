import type { RootState } from "@/ReduxStore/store";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";

export default function ChatList() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const chatState = useSelector((state: RootState) => state.chat.chat);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (flatListRef.current && chatState.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chatState]);

  return (
      <FlatList
        ref={flatListRef}
        data={chatState}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <ChatMessage item={item} />}
        contentContainerStyle={{paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
