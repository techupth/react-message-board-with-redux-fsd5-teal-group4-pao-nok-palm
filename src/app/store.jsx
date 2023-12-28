// TODO: Start Create Store Here !
// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import modPost from "../slices/messageBoardSlice";
import textSlices from "../slices/textSlices";

export const store = configureStore({
    reducer : {
        post: modPost,
        text: textSlices
    }
})
