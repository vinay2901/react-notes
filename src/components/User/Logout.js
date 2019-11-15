import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    console.log("COMPONENET LOADED");
    localStorage.clear();
    this.props.history.push("/login");
  }
  render() {
    return <div></div>;
  }
}
export default Logout;
