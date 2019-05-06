import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  assignEvenAdOdds(userInput) {
    let input = userInput.split(",");
    let evens = [];
    let odds = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] % 2 === 0) {
        evens.push(input[i]);
      } else {
        odds.push(input[i]);
      }
    }
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenenAndOddPB">
        <h4> Evens and Odds </h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAdOdds(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          {" "}
          Evens: {JSON.stringify(this.state.evenArray)}{" "}
        </span>
        <span className="resultsBox">
          {" "}
          Odds: {JSON.stringify(this.state.oddArray)}{" "}
        </span>
      </div>
    );
  }
}
