import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import classes from "./Signup.module.css";
import { callAPI } from "../../apis/api";
import Modal from "../UI/Modal/Modal";
import Header from "../Header/Header";

class Signup extends Component {
  state = {
    showModal: false
  };

  handleSubmission = async () => {
    if (!this.name.value || !this.username.value || !this.password.value) {
      this.setState({ showModal: true, message: "FILL ALL FIELDS" });
    } else {
      let requestObject = {
        name: this.name.value,
        username: this.username.value,
        password: this.password.value
      };
      let result = await callAPI("POST", "user", JSON.stringify(requestObject));
      console.log("RESULT", result);

      if (result._id) {
        console.log("SUCCESS", result);

        this.setState({ showModal: true, message: "SUCCESS" });
      } else {
        console.log("ERROR", result.error);
        this.setState({ showModal: true, message: result.error });
      }
    }
  };

  hideModalHandler = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Container>
        <Header isAuthenticated={false} />

        <Modal
          show={this.state.showModal}
          message={this.state.message}
          modalClosed={this.hideModalHandler}
        ></Modal>
        <Form className={classes.SignupFrom}>
          <Form.Group controlId="formName">
            <Form.Label>Enter your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              ref={name => (this.name = name)}
            />
          </Form.Group>

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

export default Signup;
