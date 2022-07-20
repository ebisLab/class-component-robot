import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestData } from "../actions";
import MainPage from "./MainPage";

const mapStateToProps = (state) => {
  return {
    // searchField: state.searchField   //if we want to target only searchField reducer
    //from reducer
    searchField: state.searchData.searchField, //without combineReducer and only targeting searchData reducer,
    data: state.requestData.data,
    isPending: state.requestData.isPending,
    error: state.requestData.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    //requestdata action replaces componentdidmount request
    onRequestData: () => dispatch(requestData()), //wewant to return a function from it -- specifically reducer/action has dispatch method
  };
};

class AppClass extends Component {
  //constructor is removed because there are no more states, they are passed as states
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
