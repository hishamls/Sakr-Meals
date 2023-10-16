import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const ModalBackground = (props) => {
  return <div className={classes["background"]} onClick={props.onClose}></div>;
};

const ModalForeground = (props) => {
  return (
    <div className={classes["foreground"]}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal-overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackground onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalForeground>{props.children}</ModalForeground>,
        portalElement
      )}
    </Fragment>
  );
}
