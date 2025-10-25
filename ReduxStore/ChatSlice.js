import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCusVNOoxmvhHpLXH6fPpiuPFiC1EYtHYA",
});

export const CreateChat = createAsyncThunk("chat/create", async (query) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: query }],
      },
    ],
  });
  const egyptTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Africa/Cairo",
    hour12: true,
  });
  return {
    userMessage: query,
    botMessage: response.text,
    time: egyptTime,
  };
});

const initialState = {
  chat: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    clearChat: (state) => {
      state.chat = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateChat.fulfilled, (state, action) => {
        state.loading = null;
        state.error = false
        state.chat.push({
          user: action.payload.userMessage,
          bot: action.payload.botMessage,
          time: action.payload.time,
        });
      })
      .addCase(CreateChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearChat } = chatSlice.actions;
export default chatSlice.reducer;
