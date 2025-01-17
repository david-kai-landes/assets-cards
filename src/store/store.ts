import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../store/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
