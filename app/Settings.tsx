import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ThemedButton } from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function SettingsUI() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <ThemedView
      lightColor="#F7F8FA"
      darkColor="#141718"
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ paddingVertical: 40 }}>
        <ThemedText lightColor="#141718" darkColor="#fff" style={styles.title}>
          Settings
        </ThemedText>

        <View style={styles.section}>
          <ThemedText
            lightColor="#555"
            darkColor="#ccc"
            style={styles.sectionTitle}
          >
            Appearance
          </ThemedText>
          <ThemedButton
            text={`Dark Mode: ${darkMode ? "On" : "Off"}`}
            style={styles.optionButton}
            lightColor={darkMode ? "#232627" : "#E3E3E3"}
            darkColor={darkMode ? "#4caf50" : "#232627"}
            textLight={darkMode ? "#fff" : "#141718"}
            textDark={darkMode ? "#fff" : "#fff"}
            onPress={() => setDarkMode(!darkMode)}
          />
        </View>

        <View style={styles.section}>
          <ThemedText
            lightColor="#555"
            darkColor="#ccc"
            style={styles.sectionTitle}
          >
            Notifications
          </ThemedText>
          <ThemedButton
            text={`Notifications: ${notifications ? "On" : "Off"}`}
            style={styles.optionButton}
            lightColor={notifications ? "#232627" : "#E3E3E3"}
            darkColor={notifications ? "#4caf50" : "#232627"}
            textLight={notifications ? "#fff" : "#141718"}
            textDark={notifications ? "#fff" : "#fff"}
            onPress={() => setNotifications(!notifications)}
          />
        </View>

        <View style={styles.section}>
          <ThemedText
            lightColor="#555"
            darkColor="#ccc"
            style={styles.sectionTitle}
          >
            Account
          </ThemedText>
          <ThemedButton
            text="Change Password"
            style={styles.optionButton}
            lightColor="#E3E3E3"
            darkColor="#232627"
            textLight="#141718"
            textDark="#fff"
            onPress={() => {}}
          />
          <ThemedButton
            text="Privacy Settings"
            style={styles.optionButton}
            lightColor="#E3E3E3"
            darkColor="#232627"
            textLight="#141718"
            textDark="#fff"
            onPress={() => {}}
          />
          <ThemedButton
            text="Logout"
            style={styles.optionButton}
            lightColor="#E3E3E3"
            darkColor="#e53935"
            textLight="#141718"
            textDark="#fff"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  optionButton: {
    width: "100%",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
});
