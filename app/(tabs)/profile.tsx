import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

export default function Profile() {
  const user = {
    uid: "rWKP0sYbx0hy10D3SdpNSKVlpuX2",
    email: "amrm80233@gmail.com",
    emailVerified: false,
    isAnonymous: false,
    providerData: [
      {
        providerId: "password",
        uid: "amrm80233@gmail.com",
        displayName: null,
        email: "amrm80233@gmail.com",
        phoneNumber: null,
        photoURL: null,
      },
    ],
    stsTokenManager: {
      accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdlYTA5ZDA1NzI2MmU2M2U2...",
      expirationTime: 1761257225852,
      refreshToken: "AMf-vBzoqHbwR_KsgLdewlrbNChGZg0B5LYts-ZoiK-Z3HN7hh26...",
    },
    createdAt: "1761252672971",
    lastLoginAt: "1761253568521",
    apiKey: "AIzaSyC4uD8nn-w2Xu49I6VT1IpeUG3DnK3fOME",
    appName: "[DEFAULT]",
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri:
              user.providerData[0].photoURL ??
              "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={styles.avatar}
        />
        <ThemedText type="title" style={styles.name}>
          {user.providerData[0].displayName ?? "No Name"}
        </ThemedText>
        <ThemedText style={styles.email}>
          {user.email ?? "No email available"}
        </ThemedText>
      </View>

      <View style={styles.infoCard}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Firebase User Data
        </ThemedText>

        <View style={styles.infoRow}>
          <Text style={styles.label}>UID:</Text>
          <Text style={styles.value}>{user.uid}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email Verified:</Text>
          <Text style={styles.value}>{user.emailVerified ? "Yes" : "No"}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Provider:</Text>
          <Text style={styles.value}>{user.providerData[0].providerId}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Created At:</Text>
          <Text style={styles.value}>
            {new Date(Number(user.createdAt)).toLocaleString()}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Last Login:</Text>
          <Text style={styles.value}>
            {new Date(Number(user.lastLoginAt)).toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.editButton]}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={[styles.buttonText, { color: "#fff" }]}>Logout</Text>
        </TouchableOpacity>
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
  buttonsContainer: {
    width: "100%",
    marginTop: 30,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#999",
  },
  logoutButton: {
    backgroundColor: "#e53935",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
