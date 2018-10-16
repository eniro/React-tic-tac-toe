import React from 'react';
import Square from './Square'

const BoardRow = ({ squares, from, onClick }) => (
  <div className="board-row">
    {squares.map((square, i) => (
      <Square onClick={()=>onClick(from+i)} value={square} />
    ))}
  </div>
)

export default BoardRow;