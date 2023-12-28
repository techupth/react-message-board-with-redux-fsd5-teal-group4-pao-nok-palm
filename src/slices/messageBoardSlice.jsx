// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const messageBoardSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    addMessage: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    deleteMessage: (state, action) => {
      state.splice(action.payload, 1);
      return state;
    },
  },
});

export const { addMessage, deleteMessage } = messageBoardSlice.actions;
export default messageBoardSlice.reducer;
