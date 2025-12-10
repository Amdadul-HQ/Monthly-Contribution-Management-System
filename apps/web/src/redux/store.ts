import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/userSlice/userSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "./storage";
import { baseApi } from "./api/baseApi";

const persistOptions = {
  key: "auth",
  storage,
};

const persistedUser = persistReducer(persistOptions, authReducer);
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: persistedUser,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
