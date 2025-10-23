import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

export default function Profile() {
  // بيانات موك تحاكي اللي ممكن تجي من Firebase
  const user = {
    displayName: "Amr Maher",
    email: "amrr.maherr24@gmail.com",
    photoURL:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&q=80",
    uid: "user_123456789",
    creationTime: "2024-01-12T14:25:00Z",
    lastSignInTime: "2025-10-23T21:15:00Z",
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.photoURL }} style={styles.avatar} />
        <ThemedText type="title" style={styles.name}>
          {user.displayName}
        </ThemedText>
        <ThemedText style={styles.email}>{user.email}</ThemedText>
      </View>

      <View style={styles.infoCard}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Account Details
        </ThemedText>

        <View style={styles.infoRow}>
          <Text style={styles.label}>User ID:</Text>
          <Text style={styles.value}>{user.uid}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Created At:</Text>
          <Text style={styles.value}>
            {new Date(user.creationTime).toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Last Login:</Text>
          <Text style={styles.value}>
            {new Date(user.lastSignInTime).toLocaleString()}
          </Text>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#888",
  },
  infoCard: {
    width: "100%",
    padding: 20,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "500",
    color: "#555",
  },
  value: {
    color: "#222",
  },
});
