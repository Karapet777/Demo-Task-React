import React from "react";

import Button from "../Button/Button";
import "../ListItem/ListItem.css";

function Listitme(props) {
  return (
    <div className="ListItme_block">
      <h1>{props.name}</h1>
      <div className="block">
        <div>{props.img}</div>
        <p className="itme_info">{props.info}</p>
      </div>
      <Button title="Buy" className="btn_Bay" />
    </div>
  );
}

export default Listitme;
