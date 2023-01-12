import { configureStore } from "@reduxjs/toolkit";
import { threadReducer } from "./threads/slice";

const store = configureStore({
  reducer: {
    threadReducer: threadReducer
  }
})

export default store