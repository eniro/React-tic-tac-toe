import React from 'react';
import Board from './Board';
import { calculateWinner } from '../libs'

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

   handleClick(i) {
     const squares = this.state.squares.slice();

     if(calculateWinner(squares) || squares[i]){
       return;
     }

     squares[i] = this.state.xIsNext ? 'X' : 'O';

     this.setState({
       squares: squares,
       xIsNext: !this.state.xIsNext,
     });
   }

  render() {
    let status;
      if(calculateWinner(this.state.squares)) {
        status = 'The winner is: ' + calculateWinner(this.state.squares);
      } else {
        if(!this.state.squares.includes(null)) {
          status = "Game is a tie!";
        }
        else {
        status = this.state.xIsNext ? 'Next player: X' : 'Next player: O';
      }
    }

    return(
      <div>
        <div className="status">{status}</div>
        <Board squares={this.state.squares} onClick={(i)=>this.handleClick(i)} />
      </div>
    )
  }
}

export default Game;