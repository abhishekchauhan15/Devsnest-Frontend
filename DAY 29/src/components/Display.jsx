import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const input = useSelector((state) => state.input);
  console.log(input);
  return (
    <div>
      <h1>Username: {input[0]}</h1>
      <h1>E mail: {input[1]}</h1>
    </div>
  );
};

export default Display;
