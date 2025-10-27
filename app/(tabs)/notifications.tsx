import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import Icon from "react-native-vector-icons/MaterialIcons";

const mockNotifications = [
  {
    id: "1",
    title: "Booking Confirmed",
    message: "Your event reservation is confirmed!",
  },
  {
    id: "2",
    title: "New Offer",
    message: "Get 20% off your next event booking!",
  },
  {
    id: "3",
    title: "Event Reminder",
    message: "Don't forget your event starts tomorrow!",
  },
];

export default function Notifications() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const renderNotification = ({
    item,
  }: {
    item: (typeof mockNotifications)[0];
  }) => (
    <View
      style={[styles.card, { backgroundColor: isDark ? "#2C2C2C" : "#F5F5F5" }]}
    >
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
            {item.title}
          </Text>
          <Text style={[styles.message, { color: isDark ? "#ccc" : "#555" }]}>
            {item.message}
          </Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Icon
            name="delete-outline"
            size={24}
            color={isDark ? "#FF6B6B" : "#FF3B30"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ThemedView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#141414" : "#fff" },
      ]}
    >
      <ThemedText
        type="title"
        style={[styles.header, { color: isDark ? "#fff" : "#000" }]}
      >
        Notifications
      </ThemedText>

      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 60 },
  header: { fontSize: 24, fontWeight: "700", marginBottom: 20 },
  listContent: { paddingBottom: 20 },
  card: {
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: { flex: 1, paddingRight: 10 },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 6 },
  message: { fontSize: 14, lineHeight: 20 },
  iconButton: { padding: 6 },
});
