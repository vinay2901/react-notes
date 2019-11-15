import React, { Component } from "react";
import Header from "../Header/Header";
import { Table, Button } from "react-bootstrap";
import NoteItem from "./NoteItem";
import { callGetAPI, callAPI } from "../../apis/api";
import PopUp from "./PopUp";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      notes: [
        {
          _id: 1,
          title: "NOTE1",
          description: "SSdfghjkliuyf nhguyfhj"
        },
        {
          _id: 2,
          title: "NOTE2",
          description: "SSdfghjkliuyf nhguyfhj"
        },
        {
          _id: 3,
          title: "NOTE3",
          description: "SSdfghjkliuyf nhguyfhj"
        }
      ]
    };
  }

  async componentDidMount() {
    console.log("COMPONENET LOADED");
    let token = await localStorage.getItem("token");

    let allNotes = await callGetAPI("GET", "notes", { token: token });
    this.setState({ notes: allNotes.notes });
  }

  addNoteHandler = () => {
    console.log("CREATE NOTES");
    this.props.history.push("/addnotes");
  };

  deleteNoteHandler = async id => {
    console.log("DELETE NOTES", id);
    let token = localStorage.getItem("token");

    let deletNote = await callAPI("DELETE", "note", JSON.stringify({ id }), {
      token: token,
      "content-type": "application/json"
    });
    // let response = await deletNote.json();
    if (deletNote.message) {
      let updateNotes = this.state.notes.filter(note => note._id != id);
      this.setState({ notes: updateNotes });
    }
  };

  viewNoteHandler = async id => {
    console.log("view NOTES", id);
    let token = localStorage.getItem("token");
    let details = await callGetAPI("GET", `note?id=${id}`, {
      token: token,
      "content-type": "application/json"
    });
    console.log("------", details);
    if (details.message == "success") {
      this.setState({ noteDetails: details.notes, showModal: true });
    }
  };

  editNoteHandler = id => {
    console.log("EDIT NOTES", id);
  };

  hideModalHandler = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <Header isAuthenticated={this.state.isAuthenticated} />
        <h1>MY NOTES</h1>
        <PopUp
          show={this.state.showModal}
          id={this.state.noteDetails && this.state.noteDetails._id}
          title={this.state.noteDetails && this.state.noteDetails.title}
          description={this.state.noteDetails && this.state.noteDetails.content}
          modalClosed={this.hideModalHandler}
        ></PopUp>
        <Button onClick={this.addNoteHandler}>ADD NOTE</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.notes.map(note => {
              return (
                <NoteItem
                  id={note._id}
                  title={note.title}
                  edit={this.editNoteHandler}
                  view={this.viewNoteHandler}
                  remove={this.deleteNoteHandler}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Note;
