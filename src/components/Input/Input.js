import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        placeholder={props.plac}
        className={props.class}
        value={props.value}
        type="text"
        onChange={props.userText}
      />
    </div>
  );
};
export default Input;
