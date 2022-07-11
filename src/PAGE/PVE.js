import React, { PureComponent } from 'react'
import { Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

import Board from '../Component/Board';

class PVE extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      values: [],
      player_marker: "O",
      computer_marker: "X",
      is_computer_turn: false,
      next_move: "",
      announcer: "",
    }
  }

  componentDidMount = () => {
    this.initGame();
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    let game_draw = this.checkDraw();
    let game_won = this.checkWinner();
    if (!game_draw && !game_won && this.state.is_computer_turn) setTimeout(()=>this.randomComputerTurn(),500);
    // if (this.state.is_computer_turn) this.randomComputerTurn();
  }

  initGame = () => {
    this.startFreshBoard();
    this.randomPickStartUser();
  }

  startFreshBoard = () => {
    let start_values = [];
    for (let i=0; i < 9; i++){
      start_values.push("");
    }
    this.setState({
      values: start_values,
      announcer: ""
    });
  }

  randomPickStartUser = () => {
    // 0 === player, 1 === computer
    let random_value = Math.floor(Math.random() * 2);
    if (random_value > 0) this.setState({
      next_move: "Computer's turn",
      is_computer_turn: true
    });
    else this.setState({
      next_move: "Player's turn",
      is_computer_turn: false
    });
  }

  randomComputerTurn = () => {
    let random_value = Math.floor(Math.random() * 9);
    let board_values = JSON.parse(JSON.stringify(this.state.values));
    // check board completeness
    // if no more move, return and end
    // else proceed
    if (!board_values.includes("")) return;
    if (board_values[random_value] === ""){
      board_values[random_value] = this.state.computer_marker;
      this.setState({
        values: board_values,
        is_computer_turn: false,
        next_move: "Player's turn",
      });
    }
    else{
      this.randomComputerTurn();
    }
  }

  checkWinner = () => {
    /*
    [0,1,2]
    [3,4,5]
    [6,7,8]

    - winning condition in index form-
    horizontal: [0,1,2], [3,4,5], [6,7,8]
    vertical: [0,3,6], [1,4,7], [2,5,8]
    diagonal: [0,4,8], [2,4,6]
    */
    let is_won = false;
    const winning_condition = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]];
    let winner = "";
    for (let i in winning_condition){
      const [a,b,c] = winning_condition[i];
      if (this.state.values[a] &&
          this.state.values[a] === this.state.values[b] &&
          this.state.values[a] === this.state.values[c]){
            is_won = true;
            winner = this.state.values[a] === this.state.player_marker ? "Player" : "Computer";
            this.setState({
              announcer: winner + " win!!"
            });
            break;
          }
    }
    return is_won;
  }

  checkDraw = () => {
    let is_draw = false;
    if (!this.state.values.includes("")){
      is_draw = true;
      this.setState({ announcer: "It's a draw." });
    }
    return is_draw;
  }
  
  handlePlayerChoice = (e) => {
    let new_values = JSON.parse(JSON.stringify(this.state.values));
    if (new_values[e.target.id] === ""){
      new_values[e.target.id] = this.state.player_marker;
      this.setState({
        values: new_values,
        is_computer_turn: true,
        next_move: "Computer's turn"
      });
    }
  }
  
  handleNewGame = () => {
    this.initGame();
  }

  handleReturnHome = () => {
    return <Link to="/" />;
  }

  render() {
    return (
      <div className='pve'>
        {this.state.announcer === ""?
        <div className='next-player'>{this.state.next_move}</div>
        :
        <div className='game-over'>
          <div className='announcer'>{this.state.announcer}</div>
          <div className='game-over-action'>
            <Button className='action-btn' onClick={this.handleNewGame}>{"New Game"}</Button>
            <Link to="/" id="menu" className="action-btn" onClick={this.handleReturnHome}>
              <div id="menu" className="title">{"Return Home"}</div>
            </Link>
          </div>
        </div>
        }
        <Board values={this.state.values} handlePlayerChoice={this.handlePlayerChoice} is_computer_turn={this.state.is_computer_turn}/>
      </div>
    )
  }
}

export default PVE