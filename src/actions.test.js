import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SEARCH_PENDING,
  REQUEST_SEARCH_SUCCESS,
  REQUEST_SEARCH_FAIL,
} from "./constants";

import * as actions from "./actions";

import configureMockStore from "redux-mock-store"; //fake store used for testing

// import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

//create store
const mockStore = configureMockStore([thunkMiddleware]);

// const mockStore = configureMockStore({ thunkMiddleware });
// const mockStore = configureMockStore({
//   middleware: [thunk],
//   // reducer: searchData, //if we're targeting only 1 reducer
// });
it("should create an action to search data", () => {
  const text = "woo";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it("handles requesting data API", () => {
  const store = mockStore();
  store.dispatch(actions.requestData());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_SEARCH_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});
