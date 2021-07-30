import React from "react";
import "../styles/caloriePage.css";
import CalorieBox from "./calorieBox";


const calorieArr=[
    {
        title:"Pizza",
        calori: 55
    
    },
    {
        title:"Rice",
        calori: 50
    
    },
    {
        title:"Burger",
        calori: 47
    
    },
    {
        title:"Pani Puri ",
        calori: 12
    
    },
    {
        title:"Chowmin",
        calori: 72
    
    },
    {
        title:"Pasta",
        calori: 58
    
    }
];

function CaloriePage(){
    return(
     <div className="page">
    <div className="container">

   {
       calorieArr.map(element =>(
        <CalorieBox title={element.title} calories={element.calori}/> 

    ))}
    
    </div>
    </div>
    );
}


export default CaloriePage; 