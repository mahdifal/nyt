import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../apis/nyt";

export const fetchSearch = createAsyncThunk("fetch/search", async (data) => {
  console.log("here", data);
  const response = await axios.get(
    `/articlesearch.json?q=${data.value}&api-key=${process.env.REACT_APP_API_KEY}`,
    {
      params: {
        page: data.page || 0,
      },
    }
  );
  return response?.data?.response?.docs;
});

const initialState = {
  searchList: [],
  fetchSearchs: false,
  errorMessage: null,
};

const searchSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [fetchSearch.fulfilled]: (state, action) => {
      state.searchList = action.payload;
      state.fetchSearchs = false;
    },
    [fetchSearch.pending]: (state) => {
      state.fetchSearchs = true;
    },
    [fetchSearch.rejected]: (state) => {
      state.fetchSearchs = false;
      state.errorMessage = "Something went wrong!";
    },
  },
});

export default searchSlice.reducer;
