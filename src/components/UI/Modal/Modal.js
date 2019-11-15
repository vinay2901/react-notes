import React, { Component } from "react";
import { Button } from "react-bootstrap";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const modal = props => {
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
        {props.message}
        <Button className={classes.modalButton} onClick={props.modalClosed}>
          close
        </Button>
      </div>
    </div>
  );
};
export default modal;
