import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const onClick = () => {
    props.onClose();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={onClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onClick}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
