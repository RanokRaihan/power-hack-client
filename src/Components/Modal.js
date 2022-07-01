import React from "react";
import classes from "../styles/Modal.module.css";

const Modal = ({ children }) => {
    return <div className={classes.modal}>{children}</div>;
};

export default Modal;
