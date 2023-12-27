// TODO: Start Create Store Here !
// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import modPost from "../slices/messageBoardSlice";

export const store = configureStore({
    reducer : {
        post: modPost
    }
})
