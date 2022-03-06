import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    article: articleReducer,
  },
});

export default store;
