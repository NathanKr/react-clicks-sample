import React, { Component } from "react";

class ShowClicksUsingClass extends Component {
  state = { clicks: 0 };
  componentDidMount() {
    document.title = `clicks : ${this.state.clicks}`;
  }

  componentDidUpdate() {
    document.title = `clicks : ${this.state.clicks}`;
  }
  style = { width: "100%", height: "100vh" };
  render() {
    return (
      <div
        style={this.style}
        onClick={() => this.setState({ clicks: this.state.clicks + 1 })}
      >
        <h2>Component ShowClicksUsingClass</h2>{" "}
        <p>click on the viewport and look on the browser tab and DOM</p>
        <p>clicks : {this.state.clicks}</p>
      </div>
    );
  }
}
export default ShowClicksUsingClass;
