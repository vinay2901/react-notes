import React from "react"
import classes from "./Backdrop.module.css";
import { Button } from "react-bootstrap";
const backdrop = (props)=>(
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}>
    </div>:null
);

export default backdrop