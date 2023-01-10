import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./todo";

export const store = configureStore({
  reducer: todoReducer,
});

export type RootState = ReturnType<typeof store.getState>