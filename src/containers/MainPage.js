import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";

class MainPage extends Component {
  //constructor is removed because there are no more states, they are passed as states
  componentDidMount() {
    this.props.onRequestData();
  }

  filteredValues = (data) => {
    return data.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { searchField, onSearchChange, data, isPending } = this.props;
    // const filteredValues = data.filter((item) => {
    //   return item.name.toLowerCase().includes(searchField.toLowerCase());
    // });
    return isPending ? (
      "Loading ..."
    ) : (
      <div>
        <Header />
        <h1>With App class</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <ErrorBoundary>
          <CardList data={this.filteredValues(data)} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default MainPage;
