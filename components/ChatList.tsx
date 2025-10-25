import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import type { RootState } from "@/ReduxStore/store";
import { useRef, useEffect } from "react";

export default function ChatList() {
  const color = useColorScheme();
  const isDark = color === "dark";
  const chatState = useSelector((state: RootState) => state.chat.chat);
  const flatListRef = useRef<FlatList>(null);
  // Scroll to bottom automatically when chat updates
  useEffect(() => {
    if (flatListRef.current && chatState.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chatState]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <FlatList
        ref={flatListRef}
        data={chatState}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          const time = item.time || getEgyptTime();
          return (
            <View style={{ marginBottom: 12 }}>
              {item.user && (
                <View style={{ alignItems: "flex-end", marginBottom: 10 }}>
                  <View
                    style={[
                      styles.bubble,
                      styles.userBubble,
                      { backgroundColor: isDark ? "#0A84FF" : "#DCF8C6" },
                    ]}
                  >
                    <Text style={{ color: "#fff", fontSize: 16 }}>
                      {item.user}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: isDark ? "#a0a0a0" : "#555",
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    Me • {time}
                  </Text>
                </View>
              )}

              {item.bot && (
                <View style={{ alignItems: "flex-start" }}>
                  <View
                    style={[
                      styles.bubble,
                      styles.botBubble,
                      { backgroundColor: isDark ? "#3A3B3C" : "#ECECEC" },
                    ]}
                  >
                    <Text
                      style={{ color: isDark ? "#fff" : "#000", fontSize: 16 }}
                    >
                      {item.bot}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: isDark ? "#a0a0a0" : "#555",
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    Bot • {time}
                  </Text>
                </View>
              )}
            </View>
          );
        }}
        contentContainerStyle={{ padding: 15, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bubble: {
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  userBubble: {
    borderTopRightRadius: 0,
  },
  botBubble: {
    borderTopLeftRadius: 0,
  },
});
