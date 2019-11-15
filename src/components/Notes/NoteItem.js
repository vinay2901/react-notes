import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Note.module.css";

const buttoStyle = {
  fontSize: "15px",
  textAlign: "center",
  "margin-left": "10px"
};
const NoteItem = props => (
  <tr>
    <td>{props.id}</td>
    <td>{props.title}</td>
    {/* <td>{props.description}</td> */}
    <td>
      <Button className={classes.danger} onClick={() => props.remove(props.id)}>
        Delete
      </Button>
      <Button
        className={classes.info}
        style={buttoStyle}
        onClick={() => props.edit(props.id)}
      >
        Edit
      </Button>
      <Button
        className={classes.info}
        style={buttoStyle}
        onClick={() => props.view(props.id)}
      >
        View
      </Button>
    </td>
  </tr>
);

export default NoteItem;
