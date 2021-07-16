import React from "react";
import "../styles/caloriePage.css";
import CalorieBox from "./calorieBox";


const calorieArr=[
    {
        title:"pizza",
        calori: 55
    
    },
    {
        title:"rice",
        calori: 50
    
    },
    {
        title:"pizza",
        calori: 55
    
    },
    {
        title:"pizza",
        calori: 55
    
    },
    {
        title:"pizza",
        calori: 55
    
    },
    {
        title:"pizza",
        calori: 55
    
    }
];

function CaloriePage(){
    return(
     <div className="page">
    <div className="container">
    {/* <p>this is test </p> */}

   {calorieArr.map(element =>(
        <CalorieBox title={element.title} calories={element.calori}/> 

    ))}

    </div>
    </div>
    );
}


export default CaloriePage; 