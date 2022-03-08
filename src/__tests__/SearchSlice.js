import searchSlice, { fetchSearch } from "../redux/searchSlice";

describe("Search Result Test", () => {
  it("should set loading true while action is pending", () => {
    const action = { type: fetchSearch.pending };
    const state = searchSlice(
      {
        searchList: [],
        fetchSearchs: false,
        errorMessage: null,
      },
      action
    );
    expect(state).toEqual({
      searchList: [],
      fetchSearchs: true,
      errorMessage: null,
    });
  });

  it("should set search results when action is fulfilled", () => {
    const action = {
      type: fetchSearch.fulfilled,
      payload: {
        docs: [
          {
            abstract:
              "Suggested reading from critics and editors at The New York Times.",
            _id: "nyt://article/13b8fe77-12d1-5d0a-b767-5d6ea796c06d",
          },
          {
            abstract:
              "Mónica Guzmán’s new book, “I Never Thought of It That Way,” examines our polarized culture and helps us find common ground.",
            _id: "nyt://article/076f86f0-b258-5607-b27b-122c9b7a3f43",
          },
        ],
      },
    };
    const state = searchSlice(
      {
        searchList: [],
        fetchSearchs: false,
        errorMessage: null,
      },
      action
    );
    expect(state).toEqual({
      fetchSearchs: false,
      errorMessage: null,
      searchList: {
        docs: [
          {
            abstract:
              "Suggested reading from critics and editors at The New York Times.",
            _id: "nyt://article/13b8fe77-12d1-5d0a-b767-5d6ea796c06d",
          },
          {
            abstract:
              "Mónica Guzmán’s new book, “I Never Thought of It That Way,” examines our polarized culture and helps us find common ground.",
            _id: "nyt://article/076f86f0-b258-5607-b27b-122c9b7a3f43",
          },
        ],
      },
    });
  });

  it("should set error true when action is rejected", () => {
    const action = { type: fetchSearch.rejected };
    const state = searchSlice(
      {
        searchList: [],
        fetchSearchs: false,
        errorMessage: null,
      },
      action
    );
    expect(state).toEqual({
      searchList: [],
      fetchSearchs: false,
      errorMessage: "Something went wrong!",
    });
  });
});
