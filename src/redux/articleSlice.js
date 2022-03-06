import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../apis/nyt";

export const fetchArticle = createAsyncThunk("fetch/article", async (data) => {
  const response = await axios.get(
    `/articlesearch.json?api-key=${process.env.REACT_APP_API_KEY}`,
    {
      params: {
        fq: `_id:("${data}")`,
        fl: `_id,abstract,lead_paragraph,pub_date`,
      },
    }
  );
  return response?.data?.response;
});

const initialState = {
  singleArticle: [],
  fetching: false,
  errorMessage: null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  extraReducers: {
    [fetchArticle.fulfilled]: (state, action) => {
      state.singleArticle = action.payload;
      state.fetching = false;
    },
    [fetchArticle.pending]: (state) => {
      state.fetching = true;
    },
    [fetchArticle.rejected]: (state) => {
      state.fetching = false;
      state.errorMessage = "Something went wrong!";
    },
  },
});

export default articleSlice.reducer;
