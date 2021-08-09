import React, { useState } from "react";
import "../styles/caloriePage.css";
import CalorieBox from "./calorieBox";

const calorieArr = [
  {
    title: "Pizza",
    calori: 55,
  },
  {
    title: "Rice",
    calori: 50,
  },
  {
    title: "Burger",
    calori: 47,
  },
  {
    title: "Pani Puri ",
    calori: 12,
  },
  {
    title: "Chowmin",
    calori: 72,
  },
  {
    title: "Pasta",
    calori: 58,
  },
  {
    title: "Salad",
    calori: 40,
  },
  {
    title: "Fries",
    calori: 35,
  },
  {
    title: "Soup",
    calori: 40,
  },
];

function CaloriePage() {
  const [state, setState] = useState(calorieArr);
  // console.log(useState(calorieArr));


  const handleClick = (id) => {
    // console.log("click");
    let newState = state.filter((el) => el !== state[id]);
    console.log(newState);
    setState(newState);
  };
  // console.log(state);
  return (
    <div className="page">
      <div className="container">
        {
          state.length > 0 ? (
        state.map((element, index) => (
            <CalorieBox
              handleClick={handleClick}
              key={index}
              id={index}
              title={element.title}
              calories={element.calori}
            />
          ))
        ) : (
          <p>No items left</p>
        )}
      </div>
    </div>
  );
}

export default CaloriePage;
