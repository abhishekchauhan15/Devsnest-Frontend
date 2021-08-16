import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { personApiSlice } from "../features/person/personSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [personApiSlice.reducerPath]: personApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(personApiSlice.middleware);
  },
});

export type appDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;
