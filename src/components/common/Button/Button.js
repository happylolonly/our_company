import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const propTypes = {};

const Button = props => {
  // const cls = [
  //   classes.Button,
  //   classes[props.type]
  // ]

  return (
    <button 
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
