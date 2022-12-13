import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <span className="button-div">
      <button
        className={`${classes.button} ${props.className}`}
        type={`${props.type} || button`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </span>
  );
};

export default Button;
