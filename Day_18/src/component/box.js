import React from "react";
import "../style/box.css";

function Box(props) {
  const { colorClass } = props;
  return <div className={colorClass}></div>;
}

export default Box;
