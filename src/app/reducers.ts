import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import authReducer from "@/features/auth/auth.slice";
import postReducer from "@/features/post/post.slice";

const persistConfig = {
  keyPrefix: "redux-",
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  auth: authReducer,
  post: postReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
