import React from 'react';
import BoardRow from './BoardRow';

const Board = ({ squares, onClick}) => (
    <div className="board">
        <BoardRow squares={squares.slice(0,3)} from={0} onClick={onClick}/>
        <BoardRow squares={squares.slice(3,6)} from={3} onClick={onClick}/>
        <BoardRow squares={squares.slice(6,9)} from={6} onClick={onClick}/>
    </div>
)

export default Board;