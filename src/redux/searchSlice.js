import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../apis/nyt";

export const fetchSearch = createAsyncThunk("fetch/search", async (data) => {
  const response = await axios.get(
    `/articlesearch.json?q=${data.searchTerm}&api-key=${process.env.REACT_APP_API_KEY}`,
    {
      params: {
        page: data.page || 0,
        fl: `_id,abstract`,
      },
    }
  );
  return response?.data?.response;
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
