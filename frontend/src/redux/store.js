import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice.js'; // ✅ imported correctly

export const store = configureStore({
  reducer: {
    user: userSlice, // ✅ use the reducer
  }
});
