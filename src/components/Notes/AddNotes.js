import React, { Component } from "react";
import Header from "../Header/Header";
import { Form, Button, Container } from "react-bootstrap";
import Modal from "../UI/Modal/Modal";

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
