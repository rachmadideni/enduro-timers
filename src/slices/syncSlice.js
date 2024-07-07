import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSync: false
};

export const syncSlice = createSlice({
  name: "sync",
  initialState,
  reducers: {
    setSyncStatus: (state, action) => {
      state.isSync = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setSyncStatus } =
  syncSlice.actions;

export default syncSlice.reducer;
