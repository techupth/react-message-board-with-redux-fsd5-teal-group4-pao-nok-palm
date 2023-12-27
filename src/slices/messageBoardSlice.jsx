// TODO: Start Create Slice Here
// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const modPost = createSlice({
    name:"post",
    initialState:initialState,
    reducers: {
        addPost: (state,action)=>{
            // console.log(action);
            const text = action.payload;
            // console.log(text)
            state.push(text);
        },
        del: (state,action)=>{
            // console.log(action.payload);
            state.splice(action.payload,1);
        }
    }
})

export const {addPost,del} = modPost.actions;
export default modPost.reducer;