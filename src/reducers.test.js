import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SEARCH_PENDING,
  REQUEST_SEARCH_SUCCESS,
  REQUEST_SEARCH_FAIL,
} from "./constants";

import * as reducers from "./reducers";

describe("search robots", () => {
  it("should return initial state", () => {
    expect(reducers.searchData()).toEqual({ searchField: "" });
  });
  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchData(
        { searchField: "" }, //initialState
        {
          type: CHANGE_SEARCH_FIELD,
          payload: "abc",
        }
      )
    ).toEqual({ searchField: "abc" });
  });
});

describe("request Data", () => {
  const initialStateData = {
    data: [],
    error: "",
    isPending: false,
  };
  it("should return the intial state", () => {
    expect(reducers.requestData()).toEqual(initialStateData);
  });

  it("should handle REQUEST_SEARCH_PENDING action", () => {
    expect(
      reducers.requestData(initialStateData, {
        type: REQUEST_SEARCH_PENDING,
      })
    ).toEqual({
      data: [],
      error: "",
      isPending: true,
    });
  });

  it("should handle REQUEST_SEARCH_SUCCESS action", () => {
    expect(
      reducers.requestData(initialStateData, {
        type: REQUEST_SEARCH_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      data: [
        {
          id: "123",
          name: "test",
          email: "test@gmail.com",
        },
      ],
      error: "",
      isPending: false,
    });
  });

  it("should handle REQUEST_SEARCH_FAIL action", () => {
    expect(
      reducers.requestData(initialStateData, {
        type: REQUEST_SEARCH_FAIL,
        payload: "NAGH!",
      })
    ).toEqual({
      error: "NAGH!",
      data: [],
      isPending: false,
    });
  });
});
