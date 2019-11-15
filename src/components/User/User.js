import React, { Component } from "react";
import Header from "../Header/Header";
import { callGetAPI } from "../../apis/api";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      userDetails: ""
    };
  }

  async componentDidMount() {
    let token = localStorage.getItem("token");
    let profileInfo = await callGetAPI("GET", "user", { token: token });
    this.setState({ userDetails: profileInfo });
  }

  render() {
    return (
      <div>
        <Header isAuthenticated={this.state.isAuthenticated} />
        <p>NAME: {this.state.userDetails.name}</p>
        <p>USERNAME: {this.state.userDetails.name}</p>
      </div>
    );
  }
}

export default User;
