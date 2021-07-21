import React from "react";
import row from "../style/row.css"
import Box from "./box";


function Row(props){
    const  {ro} = props;
    
    const newRow = ro.map((box,index)=>{
        return box === 0 ? <Box colorClass="White" key={index} /> : <Box colorClass="Black" key={index}/>
    });

    return <div className="row">{newRow} </div>
}


export default Row;

