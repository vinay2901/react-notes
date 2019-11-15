import React, { Component } from "react";
import Header from "../Header/Header";
import { Form, Button, Container } from "react-bootstrap";
import Modal from "../UI/Modal/Modal";
import { callAPI } from "../../apis/api";

class AddNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      userDetails: "",
      title: "",
      content: ""
    };
  }

  handleSubmission = async () => {
    if (!this.title.value || !this.content.value) {
      this.setState({ showModal: true, message: "FILL ALL FIELDS" });
    } else {
      let requestObject = {
        title: this.title.value,
        content: this.content.value
      };
      console.log("SEND THIS", requestObject);
      let token = localStorage.getItem("token");
      let result = await callAPI(
        "POST",
        "note",
        JSON.stringify(requestObject),
        {
          token: token,
          "content-type": "application/json"
        }
      );
      console.log("RESULT", result);

      if (result._id) {
        console.log("SUCCES99S", result);
        this.props.history.push("/notes");
      } else {
        console.log("ERROR", result.error);
        this.setState({ showModal: true, message: result.error });
      }
    }
  };

  render() {
    return (
      <div>
        <Header isAuthenticated={this.state.isAuthenticated} />
        <Container>
          <Form>
            <Modal
              show={this.state.showModal}
              message={this.state.message}
              modalClosed={this.hideModalHandler}
            ></Modal>
            <Form.Group controlId="noteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Note Title"
                ref={title => (this.title = title)}
              />
            </Form.Group>

            <Form.Group controlId="noteContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="put your content here"
                ref={content => (this.content = content)}
              />
            </Form.Group>

            <Button variant="primary" onClick={this.handleSubmission}>
              Add
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default AddNotes;
