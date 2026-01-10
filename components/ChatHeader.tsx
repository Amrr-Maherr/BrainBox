import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';

interface ChatHeaderProps {
  title: string;
  onSearchPress?: () => void;
}

export default function ChatHeader({ title, onSearchPress }: ChatHeaderProps) {
  return (
    <View style={styles.header} lightColor="#F7F8FA" darkColor="#141718">
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={onSearchPress}>
        <Ionicons name="search" size={24} color="#888" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
