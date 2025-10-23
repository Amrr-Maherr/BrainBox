import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

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

export default function notifications() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Notifications
      </ThemedText>

      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#1E1E1E20",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    opacity: 0.8,
  },
});
