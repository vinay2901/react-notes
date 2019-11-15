import React, { Component } from "react";
import { callGetAPI, callAPI } from "../../apis/api";
import Header from "../Header/Header";
import { Form, Button, Container } from "react-bootstrap";
import Modal from "../UI/Modal/Modal";

class EditNote extends Component {
  state = {
    showModal: false,
    id: ""
  };

  async componentDidMount() {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("noteId");
    console.log("COMPONENET --- LOADED", id);

    this.setState({ id: id });
    let details = await callGetAPI("GET", `note?id=${id}`, {
      token: token,
      "content-type": "application/json"
    });
    console.log("------", token, details);
    if (details.message == "success") {
      this.setState({
        title: details.notes && details.notes.title,
        content: details.notes && details.notes.content,
        showModal: false
      });
    }
  }

  handleSubmission = async () => {
    alert("UPDATE IN BACKEND");
    let requestObject = {
      id: this.state.id,
      title: this.title.value,
      content: this.content.value
    };
    let token = localStorage.getItem("token");
    console.log("SEND THIS", token, requestObject);

    let result = await callAPI("PUT", "note", JSON.stringify(requestObject), {
      token: token,
      "content-type": "application/json"
    });
    console.log("RESULT", result);

    if (result._id) {
      console.log("SUCCES99S", result);
      this.props.history.push("/notes");
    } else {
      console.log("ERROR", result.error);
      this.setState({ showModal: true, message: result.error });
    }
  };
  handleContentChange = event => {
    this.setState({ content: event.target.value });
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  hideModalHandler = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <Header isAuthenticated="true" />
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
                value={this.state.title}
                onChange={this.handleTitleChange}
                ref={title => (this.title = title)}
              />
            </Form.Group>

            <Form.Group controlId="noteContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.content}
                onChange={this.handleContentChange}
                ref={content => (this.content = content)}
              />
            </Form.Group>

            <Button variant="primary" onClick={this.handleSubmission}>
              Save
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default EditNote;
