// import React from "react";

// export default function CounterBtn() {
//   const [showAnswer, setShowAnswer] = React.useState(false);
//   const onClick = () => {
//     console.log("clicked");
//   };
//   return (
//     <button
//       data-testid="counter"
//       // onClick={() => setShowAnswer(!showAnswer)}
//       onClick={onClick}
//     >
//       click
//     </button>
//   );
// }

import React, { Component } from "react";

export default class CounterBtn extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextprops, nextstate) {
    // console.log(nextprops, nextstate);
    if (this.state.count !== nextstate.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    // this.setState({count: this.state.count +1}) //unintentional sideeffects
    this.setState((state) => {
      //better way of updating state
      return { count: state.count + 1 };
    });
  };
  render() {
    // console.log("countr btn");
    return (
      <button
        data-testid="counter"
        color={this.props.color}
        onClick={this.updateCount}
      >
        click {this.state.count}{" "}
      </button>
    );
  }
}
