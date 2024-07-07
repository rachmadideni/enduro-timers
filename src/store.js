import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";
import syncReducer from "./slices/syncSlice";
import raceTimersReducer from "./slices/raceTimersSlice";

// how to connect redux to devtools
// https://github.com/reduxjs/redux-devtools/issues/1533#issuecomment-2146390042

export const store = configureStore({
  reducer: {
    sync: syncReducer,
    raceTimers: raceTimersReducer,
  },
  devTools: false,
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers().concat(devToolsEnhancer());
  },
});
