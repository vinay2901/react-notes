import React, { Component } from "react";
import { Button } from "react-bootstrap";
import classes from "../UI/Modal/Modal.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";
import Aux from "../../hoc/Aux";

let styles = {};
const PopUp = props => {
  let classname = props.show ? "show" : "hide";
  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <h3
          style={{
            "text-align": "center",
            "text-transform": "capitalize"
          }}
        >
          {props.title}
        </h3>
        <p>{props.description}</p>
        <Button className={classes.modalButton} onClick={props.modalClosed}>
          close
        </Button>
      </div>
    </div>
  );
};
export default PopUp;
