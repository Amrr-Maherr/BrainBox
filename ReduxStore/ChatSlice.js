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
        role: "model",
        parts: [
          {
            text: "You are a friendly AI assistant called BrainBox. You always reply concisely and helpfully.",
          },
        ],
      },
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
    totalTokenCount: response.usageMetadata?.totalTokenCount || 0,
    promptTokenCount: response.usageMetadata?.promptTokenCount || 0,
    candidatesTokenCount: response.usageMetadata?.candidatesTokenCount || 0,
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
        state.loading = false;
        state.error = false;
        state.chat.push({
          user: action.payload.userMessage,
          bot: action.payload.botMessage,
          time: action.payload.time,
          totalTokens: action.payload.totalTokenCount,
          promptTokens: action.payload.promptTokenCount,
          candidateTokens: action.payload.candidatesTokenCount,
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
