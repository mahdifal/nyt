import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import articleReducer from "./articleSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    article: articleReducer,
  },
});

export default store;
