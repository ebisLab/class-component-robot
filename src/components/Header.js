import React, { Component } from "react";
import CounterBtn from "./CounterBtn";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextprops, nextstate) {
    return false;
  }

  // const [showAnswer, setShowAnswer] = React.useState(false);

  render() {
    // console.log('header')
    const onClicked = () => {
      console.log("clicked");
    };
    return (
      <>
        <div>small component part</div>
        <CounterBtn onClick={onClicked} color={"red"} />
      </>
    );
  }
}
