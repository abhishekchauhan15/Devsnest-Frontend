import React from "react"
import board from "../style/board.css"
import Box from "./box"


const chessArr=[
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1]
]


function ChessBoard() {
    const newArr = chessArr.map((row, i) => {
        
        return <Box row={row} key={i} />;
      });
  
    
  return (
      
      
    
    <div className="chessboard">{newArr}</div>

  )
  
}



export default ChessBoard;