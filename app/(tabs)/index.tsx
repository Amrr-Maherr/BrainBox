import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { View } from '@/components/Themed';
import ChatHeader from '@/components/ChatHeader';
import MessageInput from '@/components/MessageInput';
import ChatList, { ChatListRef } from '@/components/ChatList';
import useFetchChat from '@/hooks/useFetchChat';

type Message = {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messageToSend, setMessageToSend] = useState('');
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const chatListRef = useRef<ChatListRef>(null);

  const { data, isLoading, isError } = useFetchChat(messageToSend);

  const sendMessage = () => {
    if (message.trim()) {
      setChatMessages(prev => [...prev, { text: message, sender: 'user', timestamp: new Date() }]);
      setMessageToSend(message);
      setMessage('');
    }
  };

  // Handle response when received
  useEffect(() => {
    if (data) {
      if ('error' in data) {
        // Handle error
        setChatMessages(prev => [...prev, { text: data.error, sender: 'ai', timestamp: new Date() }]);
      } else if (data.candidates && data.candidates[0]) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        setChatMessages(prev => [...prev, { text: aiResponse, sender: 'ai', timestamp: new Date() }]);
      }
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
        <ChatList ref={chatListRef} messages={chatMessages} />
        <MessageInput
          value={message}
          onChangeText={setMessage}
          onSendPress={sendMessage}
          isLoading={isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
