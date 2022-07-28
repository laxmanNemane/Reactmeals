import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModelOverlay = (props) => {
  // console.log(props)
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
