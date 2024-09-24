import { useState } from "react";
import Square from "./square";


function Board(){
    const [xisNext,setxisNext]=useState(true)
  const [squares,setSquare]=useState([Array(9).fill(null)]);
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const squareClick=(index)=>{
  
    let nextsquare=squares.slice();
    if(xisNext){
       nextsquare[index]="X"
    }
    else{
         nextsquare[index]="O"
    }
   
    setSquare(nextsquare)
    setxisNext(!xisNext)
  }
const winner=calculateWinner(squares)
    return(
        <>
        <div className="row_board">
            <Square value={squares[0]} onSquareClick={()=>{
                squareClick(0)
            }}/>
            <Square value={squares[1]} onSquareClick={()=>{
                squareClick(1)
            }} />
            <Square value={squares[2]} onSquareClick={()=>{
                squareClick(2)
            }}/>
        </div>
        <div className="row_board">
        <Square value={squares[3]} onSquareClick={()=>{
                squareClick(3)
            }} />
            <Square value={squares[4]} onSquareClick={()=>{
                squareClick(4)
            }} />
            <Square value={squares[5]}  onSquareClick={()=>{
                squareClick(5)
            }}/>
        </div>
        <div className="row_board">
        <Square value={squares[6]}  onSquareClick={()=>{
                squareClick(6)
            }}/>
            <Square value={squares[7]} onSquareClick={()=>{
                squareClick(7)
            }}/>
            <Square value={squares[8]}  onSquareClick={()=>{
                squareClick(8)
            }} />
        </div>
        <div>
            {winner&&  `Winner:${winner}`}
        </div>
        </>
    )
}

export default Board;