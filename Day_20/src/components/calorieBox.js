import React from "react";
import "../styles/calorieBox.css";

function CalorieBox({ id, title, calories, handleClick }) {

  return (
    <div className="box">
      <div>{title}</div>
      <div>
        you have consumed <strong>{calories}</strong> today{" "}
        <button onClick={() => handleClick(id)} >Delete</button>
      </div>
    </div>
  );
}

export default CalorieBox;
