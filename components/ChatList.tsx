import { View, Text, FlatList, StyleSheet, useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import type { RootState } from "@/ReduxStore/store";

export default function ChatList() {
  const color = useColorScheme();
  const isDark = color === "dark";
    const chatState = useSelector((state: RootState) => state.chat.chat);
    
  const getEgyptTime = () => {
    const egyptTime = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" })
    );
    const hours = egyptTime.getHours().toString().padStart(2, "0");
    const minutes = egyptTime.getMinutes().toString().padStart(2, "0");
    const seconds = egyptTime.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <FlatList
      data={chatState}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        const time = getEgyptTime();
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
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 15,
    paddingBottom: 100, // space for input
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
