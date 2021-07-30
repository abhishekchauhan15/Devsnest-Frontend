import React, {useState} from "react";
import "../styles/caloriePage.css";
import CalorieBox from "./calorieBox";


const calorieArr=[
    {
        id:1,
        title:"Pizza",
        calori: 55
    
    },
    { 
        id:2,
        title:"Rice",
        calori: 50
    
    },
    { 
        id:3,
        title:"Burger",
        calori: 47
    
    },
    {
        id:4,
        title:"Pani Puri ",
        calori: 12
    
    },
    {
        id:5,
        title:"Chowmin",
        calori: 72
    
    },
    {
        id:6,
        title:"Pasta",
        calori: 58
    
    }
];

function CaloriePage(){
    const [state , setState]= useState(calorieArr);
    // console.log(state);
    return(
     <div className="page">
    <div className="container">

   {
       state.length >0 ?calorieArr.map((element ,id)=>(
        <CalorieBox  key={id} state={state} setState={setState} title={element.title} calories={element.calori}/> 

    )):<p>No items left</p>
    }
    
    </div>
    </div>
    );
}


export default CaloriePage; 