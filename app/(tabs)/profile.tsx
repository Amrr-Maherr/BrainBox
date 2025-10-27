import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedButton } from "@/components/themed-button";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const Router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Fetch user data from AsyncStorage
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const ProfileData = await AsyncStorage.getItem("userData");
        if (ProfileData) setUser(JSON.parse(ProfileData));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  if (!user) return null; // or a loader

  const provider = user.providerData[0];

  return (
    <ThemedView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#141414" : "#f9f9f9" },
      ]}
    >
      {/* Avatar and Name */}
      <View style={styles.header}>
        <Image
          source={{
            uri:
              provider.photoURL ??
              "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={styles.avatar}
        />
        <ThemedText
          type="title"
          style={[styles.name, { color: isDark ? "#fff" : "#000" }]}
        >
          {provider.displayName ?? "No Name"}
        </ThemedText>
        <ThemedText style={[styles.email, { color: isDark ? "#ccc" : "#555" }]}>
          {user.email ?? "No email available"}
        </ThemedText>
      </View>

      {/* User Info Card */}
      <View
        style={[
          styles.infoCard,
          {
            backgroundColor: isDark ? "#1C1C1C" : "#fff",
            shadowOpacity: isDark ? 0 : 0.1,
          },
        ]}
      >
        <ThemedText
          type="subtitle"
          style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}
        >
          Account Info
        </ThemedText>
        <View style={styles.infoRow}>
          <ThemedText
            style={[styles.label, { color: isDark ? "#aaa" : "#555" }]}
          >
            Email Verified:
          </ThemedText>
          <ThemedText
            style={[styles.value, { color: isDark ? "#fff" : "#222" }]}
          >
            {user.emailVerified ? "Yes" : "No"}
          </ThemedText>
        </View>

        <View style={styles.infoRow}>
          <ThemedText
            style={[styles.label, { color: isDark ? "#aaa" : "#555" }]}
          >
            Provider:
          </ThemedText>
          <ThemedText
            style={[styles.value, { color: isDark ? "#fff" : "#222" }]}
          >
            {provider.providerId}
          </ThemedText>
        </View>

        <View style={styles.infoRow}>
          <ThemedText
            style={[styles.label, { color: isDark ? "#aaa" : "#555" }]}
          >
            Created At:
          </ThemedText>
          <ThemedText
            style={[styles.value, { color: isDark ? "#fff" : "#222" }]}
          >
            {new Date(Number(user.createdAt)).toLocaleString()}
          </ThemedText>
        </View>

        <View style={styles.infoRow}>
          <ThemedText
            style={[styles.label, { color: isDark ? "#aaa" : "#555" }]}
          >
            Last Login:
          </ThemedText>
          <ThemedText
            style={[styles.value, { color: isDark ? "#fff" : "#222" }]}
          >
            {new Date(Number(user.lastLoginAt)).toLocaleString()}
          </ThemedText>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <ThemedButton
          text="Edit Profile"
          style={styles.button}
          onPress={() => Router.push("/EditProfile")}
        />
        <ThemedButton
          text="Settings"
          style={styles.button}
          onPress={() => Router.push("/Settings")}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  header: { alignItems: "center", marginTop: 40, marginBottom: 30 },
  avatar: { width: 110, height: 110, borderRadius: 55, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: "600" },
  email: { fontSize: 14 },
  infoCard: {
    width: "100%",
    padding: 20,
    borderRadius: 16,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 15 },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: { fontWeight: "500" },
  value: {},
  buttonsContainer: { width: "100%", gap: 12 },
  button: {
    width: "100%",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
