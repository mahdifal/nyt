import articleSlice, {
  fetchArticle,
  clearArticle,
} from "../redux/articleSlice";

describe("Single Article Test", () => {
  it("should set loading true while action is pending", () => {
    const action = { type: fetchArticle.pending };
    const state = articleSlice(
      {
        singleArticle: [],
        fetching: false,
        errorMessage: null,
      },
      action
    );
    expect(state).toEqual({
      singleArticle: [],
      fetching: true,
      errorMessage: null,
    });
  });

  it("should set article result when action is fulfilled", () => {
    const action = {
      type: fetchArticle.fulfilled,
      payload: {
        docs: [
          {
            abstract:
              "Mónica Guzmán’s new book, “I Never Thought of It That Way,” examines our polarized culture and helps us find common ground.",
            lead_paragraph:
              "I NEVER THOUGHT OF IT THAT WAYHow to Have Fearlessly Curious Conversations in Dangerously Divided TimesBy Mónica Guzmán",
            pub_date: "2022-03-07T10:00:03+0000",
            _id: "nyt://article/076f86f0-b258-5607-b27b-122c9b7a3f43",
          },
        ],
      },
    };
    const state = articleSlice(
      {
        singleArticle: [],
        fetching: false,
        errorMessage: null,
      },
      action
    );
    expect(state).toEqual({
      fetching: false,
      errorMessage: null,
      singleArticle: {
        docs: [
          {
            abstract:
              "Mónica Guzmán’s new book, “I Never Thought of It That Way,” examines our polarized culture and helps us find common ground.",
            lead_paragraph:
              "I NEVER THOUGHT OF IT THAT WAYHow to Have Fearlessly Curious Conversations in Dangerously Divided TimesBy Mónica Guzmán",
            pub_date: "2022-03-07T10:00:03+0000",
            _id: "nyt://article/076f86f0-b258-5607-b27b-122c9b7a3f43",
          },
        ],
      },
    });
  });

  it("should set error true when action is rejected", () => {
    const action = { type: fetchArticle.rejected };
    const state = articleSlice(
      {
        singleArticle: [],
        fetching: false,
        errorMessage: null,
      },
      action
    );
    expect(state).toEqual({
      singleArticle: [],
      fetching: false,
      errorMessage: "Something went wrong!",
    });
  });

  it("should clear article result when action is clearArticle", () => {
    const action = { type: clearArticle };
    const state = articleSlice(
      {
        singleArticle: [],
        fetching: false,
        errorMessage: null,
      },
      action
    );
    expect(state).toEqual({
      singleArticle: [],
      fetching: false,
      errorMessage: null,
    });
  });
});
