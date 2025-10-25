import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateChat } from "@/ReduxStore/ChatSlice";
import type { RootState, AppDispatch } from "@/ReduxStore/store";

export default function InputWithSendIcon() {
  const color = useColorScheme();
  const isDark = color === "dark";
  const bgColor = isDark ? "#1C1C1C" : "#F0F0F0";
  const textColor = isDark ? "#fff" : "#000";

  const [message, setMessage] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.chat);

  const sendMessage = () => {
    if (!message.trim()) return;
    dispatch(CreateChat(message));
    setMessage("");
  };

  const isDisabled = !message.trim() || loading;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 10}
      style={styles.wrapper}
    >
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <TextInput
          style={[styles.input, { color: textColor }]}
          placeholder="Type something..."
          placeholderTextColor={isDark ? "#888" : "#555"}
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity
          style={[styles.button, { opacity: isDisabled ? 0.5 : 1 }]}
          onPress={sendMessage}
          disabled={isDisabled}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Icon name="send" size={24} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    minHeight: 40,
    maxHeight: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  button: {
    marginLeft: 8,
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A84FF",
  },
});
