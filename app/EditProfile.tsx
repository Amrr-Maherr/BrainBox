import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedButton } from "@/components/themed-button";

export default function EditProfile() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png");

  const handleChangePhoto = () => {
    console.log("Change photo pressed");
  };

  return (
    <ThemedView
      lightColor="#F7F8FA"
      darkColor="#141718"
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ paddingVertical: 40 }}>
        <ThemedText lightColor="#141718" darkColor="#fff" style={styles.title}>
          Edit Profile
        </ThemedText>

        <TouchableOpacity
          onPress={handleChangePhoto}
          style={styles.avatarWrapper}
        >
          <Image source={{ uri: photoURL }} style={styles.avatar} />
          <ThemedText
            lightColor="#141718"
            darkColor="#fff"
            style={styles.changePhotoText}
          >
            Change Photo
          </ThemedText>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <ThemedText lightColor="#555" darkColor="#ccc" style={styles.label}>
            Display Name
          </ThemedText>
          <TextInput
            value={displayName}
            onChangeText={setDisplayName}
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputContainer}>
          <ThemedText lightColor="#555" darkColor="#ccc" style={styles.label}>
            Email
          </ThemedText>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
        </View>

        <ThemedButton
          text="Save Changes"
          style={styles.saveButton}
          lightColor="#141718"
          darkColor="#4caf50"
          textLight="#fff"
          onPress={() => {}}
        />
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
    marginBottom: 30,
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  changePhotoText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 55,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#e3e3e3",
    color: "#141718",
  },
  saveButton: {
    width: "100%",
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
