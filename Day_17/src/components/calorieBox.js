import React from "react";
import "../styles/calorieBox.css";

function CalorieBox(props) {
    return (
        <div className="box">
            <div>{props.title}</div>
            <div>you have consumed <strong>{props.calories}</strong> today </div>
         </div>
    );
}

export default CalorieBox