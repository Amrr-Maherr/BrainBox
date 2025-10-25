import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./ChatSlice"
const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
