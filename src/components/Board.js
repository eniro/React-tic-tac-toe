import React from 'react';
import BoardRow from './BoardRow'

const Board = ({ squares, onClick }) => (
  <div className="board">
  {[0, 3, 6].map((rowstart)=> (
    <BoardRow squares={squares.slice(rowstart,rowstart+3)} from={rowstart} onClick={onClick}/>
  ))}
  </div>
)

export default Board;