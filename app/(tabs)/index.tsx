import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { View } from '@/components/Themed';
import ChatHeader from '@/components/ChatHeader';
import MessageInput from '@/components/MessageInput';
import useFetchChat from '@/hooks/useFetchChat';

type Message = {
  text: string;
  sender: 'user' | 'ai';
};

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messageToSend, setMessageToSend] = useState('');
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const { data, isLoading, isError } = useFetchChat(messageToSend);

  const sendMessage = () => {
    if (message.trim()) {
      setChatMessages(prev => [...prev, { text: message, sender: 'user' }]);
      setMessageToSend(message);
      setMessage('');
    }
  };

  // Handle response when received
  useEffect(() => {
    if (data && data.candidates && data.candidates[0]) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      setChatMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    }
  }, [data]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={styles.container} lightColor="#F7F8FA" darkColor="#141718">
        <ChatHeader
          title="Chat"
          onSearchPress={() => console.log("Search pressed")}
        />
        <FlatList
          data={chatMessages}
          renderItem={({ item }) => (
            <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.aiMessage]}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.conversationList}
        />
        <MessageInput
          value={message}
          onChangeText={setMessage}
          onSendPress={sendMessage}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conversationList: {
    flex: 1,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
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
});
