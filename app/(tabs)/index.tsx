import React, { useState } from 'react';
import { StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { View } from '@/components/Themed';
import ChatHeader from '@/components/ChatHeader';
import ConversationItem from '@/components/ConversationItem';
import MessageInput from '@/components/MessageInput';

// Mock data for conversations
const conversations = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '10:30 AM',
    avatar: 'https://via.placeholder.com/50',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    time: '9:15 AM',
    avatar: 'https://via.placeholder.com/50',
    unreadCount: 0,
  },
  {
    id: '3',
    name: 'AI Assistant',
    lastMessage: 'Your query has been processed.',
    time: 'Yesterday',
    avatar: 'https://via.placeholder.com/50',
    unreadCount: 1,
  },
];

export default function ChatScreen() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <ChatHeader title="Chat" onSearchPress={() => console.log('Search pressed')} />
      <FlatList
        data={conversations}
        renderItem={({ item }) => <ConversationItem item={item} />}
        keyExtractor={(item) => item.id}
        style={styles.conversationList}
      />
      <MessageInput
        value={message}
        onChangeText={setMessage}
        onSendPress={sendMessage}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conversationList: {
    flex: 1,
  },
});
