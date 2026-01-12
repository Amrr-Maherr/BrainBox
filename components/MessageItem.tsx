import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';

type Message = {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View
      style={styles.messageWrapper}
      lightColor="#F7F8FA"
      darkColor="#141718"
    >
      <View
        style={[
          styles.messageContainer,
          message.sender === "user" ? styles.userMessage : styles.aiMessage,
        ]}
        lightColor="#F7F8FA"
        darkColor="#141718"
      >
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
      <View
        style={[
          styles.metaContainer,
          message.sender === "user" ? styles.userMeta : styles.aiMeta,
        ]}
        lightColor="#F7F8FA"
        darkColor="#141718"
      >
        <View
          style={styles.actionsContainer}
          lightColor="#F7F8FA"
          darkColor="#141718"
        >
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => console.log("Like pressed")}
          >
            <Ionicons name="thumbs-up-outline" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => console.log("Copy pressed")}
          >
            <Ionicons name="copy-outline" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => console.log("Share pressed")}
          >
            <Ionicons name="share-outline" size={16} color="#666" />
          </TouchableOpacity>
        </View>
        <Text style={styles.timestamp}>{formatTime(message.timestamp)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageWrapper: {
    marginVertical: 5,
  },
  messageContainer: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    color: '#000',
  },
  metaContainer: {
    marginHorizontal: 10,
    marginTop: 2,
  },
  userMeta: {
    alignItems: 'flex-end',
  },
  aiMeta: {
    alignItems: 'flex-start',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginBottom: 2,
    marginTop:2
  },
  actionButton: {
    marginLeft: 10,
    padding: 2,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
});
