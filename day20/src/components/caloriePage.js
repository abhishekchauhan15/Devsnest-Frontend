import React from "react";
import "../styles/caloriepage";


const calorieArr=[
    {
        title:"pizza",
        calori: 55
    
    }
];

function CaloriePage(){
    return(
     <div className="page">
    <div className="container">
    {   
    calorieArr.map(element =>(
        <div>
        <div>{element.title}</div>
        <div>{element.calori}</div>
        

        </div>

    ))
    }

    </div>

    </div>
    )
}


export default CaloriePage; 