import React from "react";
import "../styles/calorieBox.css";

function CalorieBox(props, state, setState) {
    const handleClick=()=>{
        // console.log("click");
        let newState= state.filter((el) => el.id !== props.id)
        setState(newState)
        
    }
    return (
        <div className="box">
            <div>{props.title}</div>
            <div>you have consumed <strong>{props.calories}</strong> today <button onClick={handleClick}>Delete</button></div>
         </div>
    );
}

export default CalorieBox