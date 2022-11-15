import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { youtube } from "./services";

export const store = configureStore({
  reducer: {
    [youtube.reducerPath]: youtube.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtube.middleware),
});
setupListeners(store.dispatch);
