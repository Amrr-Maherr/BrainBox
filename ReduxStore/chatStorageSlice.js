import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ChatState {
  chat: string[];
  loading: boolean;
}

const initialState: ChatState = {
  chat: [],
  loading: false,
};

const chatStorageSlice = createSlice({
  name: "chatStorage",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<string>) {
      state.chat.push(action.payload);
    },
    clearChat(state) {
      state.chat = [];
    },

    saveChatToLocalStorage(state) {
      try {
        AsyncStorage.setItem("savedChat", JSON.stringify(state.chat));
      } catch (error) {
        console.error("Error saving chat:", error);
      }
    },

    loadChatFromLocalStorage(state) {
      try {
        AsyncStorage.getItem("savedChat").then((data) => {
          if (data) {
            state.chat = JSON.parse(data);
          }
        });
      } catch (error) {
        console.error("Error loading chat:", error);
      }
    },
  },
});

export const {
  addMessage,
  clearChat,
  saveChatToLocalStorage,
  loadChatFromLocalStorage,
} = chatStorageSlice.actions;

export default chatStorageSlice.reducer;
