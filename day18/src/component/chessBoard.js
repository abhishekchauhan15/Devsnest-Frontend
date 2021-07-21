import React from "react";
import "../style/board.css";
import Row from "./row";


const chessArr = [
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
];

function ChessBoard() {
  const Arr = chessArr.map((row, i) => {
    return <Row ro={row} key={i} />;
  });
  return (
  
    <div className="chessboard">
    {Arr}</div>
  
  );
}

export default ChessBoard;
