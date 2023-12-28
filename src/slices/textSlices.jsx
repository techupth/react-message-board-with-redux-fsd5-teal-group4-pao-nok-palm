import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const textSlice = createSlice({
    name:"typingSlice",
    initialState:initialState,
    reducers:{
        changeText:(state, action) => {
            state=action.payload;
            return state;
        }
    },
})

export const {changeText} = textSlice.actions;
export default textSlice.reducer;