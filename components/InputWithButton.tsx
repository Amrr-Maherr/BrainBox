import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateChat } from "@/ReduxStore/ChatSlice";
import type { RootState, AppDispatch } from "@/ReduxStore/store";

export default function InputWithSendIcon() {
  const color = useColorScheme();
  const bgColor = color === "dark" ? "#676767" : "#E1E1E1";
  const [message, setMessage] = useState("");
  const dispatch = useDispatch<AppDispatch>();
    const { chat, loading, error } = useSelector(
      (state: RootState) => state.chat
    );
  const sendMessage = () => {
    if (!message.trim()) return;
    dispatch(CreateChat(message))
    setMessage("");
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <TextInput
          placeholder="Type something..."
          style={styles.input}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          {loading ? (
            <ActivityIndicator size="large" color="#222225ff" />
          ) : (
            <Icon name="send" size={24} color="#222225ff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 48,
    paddingHorizontal: 13,
    borderRadius: 7,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
