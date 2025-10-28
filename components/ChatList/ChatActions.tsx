import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

interface ChatActionsProps {
  message: string;
  isDark: boolean;
}

export default function ChatActions({ message, isDark }: ChatActionsProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const copyText = async () => {
    await Clipboard.setStringAsync(message);
    console.log("Copied to clipboard:", message);
  };

  const shareMessage = async () => {
    try {
      await Share.share({
        message: message || "Check out this message from BrainBox 🤖",
      });
    } catch (error) {
      console.error("Error sharing message:", error);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (!disliked) setLiked(false);
  };

  return (
    <View style={styles.reactionContainer}>
      {/* Copy */}
      <TouchableOpacity style={styles.reactionButton} onPress={copyText}>
        <Ionicons
          name="copy-outline"
          size={20}
          color={isDark ? "#fff" : "#000"}
        />
      </TouchableOpacity>

      {/* Like */}
      <TouchableOpacity style={styles.reactionButton} onPress={handleLike}>
        <Ionicons
          name={liked ? "thumbs-up" : "thumbs-up-outline"}
          size={22}
          color={isDark ? "#fff" : "#000"}
        />
      </TouchableOpacity>

      {/* Dislike */}
      <TouchableOpacity style={styles.reactionButton} onPress={handleDislike}>
        <Ionicons
          name={disliked ? "thumbs-down" : "thumbs-down-outline"}
          size={22}
          color={isDark ? "#fff" : "#000"}
        />
      </TouchableOpacity>

      {/* Share */}
      <TouchableOpacity style={styles.reactionButton} onPress={shareMessage}>
        <Ionicons
          name="share-outline"
          size={20}
          color={isDark ? "#fff" : "#000"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  reactionContainer: {
    flexDirection: "row",
    marginTop: 6,
    gap: 12,
  },
  reactionButton: {
    padding: 6,
    borderRadius: 12,
    backgroundColor: "transparent",
  },
});
