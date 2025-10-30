import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./ChatSlice";
import chatStorageSlice from "./chatStorageSlice";

const store = configureStore({
  reducer: {
    chat: chatSlice,
    chatStorage: chatStorageSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
