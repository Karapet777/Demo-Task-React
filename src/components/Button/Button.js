import React from "react";

import "../Button/Button.css";

function Button(props) {
  return (
    <button className={props.className} onClick={props.check}>
      {props.title}
    </button>
  );
}

export default Button;
