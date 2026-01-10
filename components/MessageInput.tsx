import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/components/useColorScheme';

interface MessageInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSendPress: () => void;
  placeholder?: string;
}

export default function MessageInput({
  value,
  onChangeText,
  onSendPress,
  placeholder = "Type a message...",
}: MessageInputProps) {
  const ColorScheme = useColorScheme();
  return (
    <View style={styles.inputContainer} lightColor="#F7F8FA" darkColor="#141718">
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSendPress}
        placeholderTextColor={`${
          ColorScheme === "dark" ? "#C2C3CB" : "#ACADB9"
        }`}
      />
      <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
        <Ionicons name="send" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    fontSize: 16,
  },
  sendButton: {
    width: 40,
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
