import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { callAPI } from "../../apis/api";
import Modal from "../UI/Modal/Modal";
import Header from "../Header/Header";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  hideModalHandler = () => {
    this.setState({ showModal: false });
  };

  handleSubmission = async () => {
    if (!this.username.value || !this.password.value) {
      this.setState({ showModal: true, message: "FILL ALL FIELDS" });
    } else {
      let requestObject = {
        username: this.username.value,
        password: this.password.value
      };
      console.log("SEND THIS", requestObject);
      let result = await callAPI(
        "POST",
        "login",
        JSON.stringify(requestObject)
      );
      console.log("RESULT", result);

      if (result._id) {
        console.log("SUCCES99S", result);
        //    this.setState({showModal:true,message:"SUCCESS"});
        localStorage.setItem("token", result.token);
        this.props.history.push("/profile");
        // this.props.history.push("/profile", {
        //   isAuthenticated: true,
        //   user: result
        // });
      } else {
        console.log("ERROR", result.error);
        this.setState({ showModal: true, message: result.error });
      }
    }
  };

  render() {
    return (
      <Container>
        <Header isAuthenticated={false} />
        <Form>
          <Modal
            show={this.state.showModal}
            message={this.state.message}
            modalClosed={this.hideModalHandler}
          ></Modal>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              ref={username => (this.username = username)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={password => (this.password = password)}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.handleSubmission}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
