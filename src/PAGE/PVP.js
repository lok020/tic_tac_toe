import React, { PureComponent } from 'react';
import { Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

import Board from '../Component/Board';

class PVP extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
        values: [],
        current_player: "",
        next_move: "",
        announcer: "",
    }
  }

  componentDidMount = () => {
    this.initGame();
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
    this.setState({values: start_values});
  }

  randomPickStartUser = () => {
    let start_user = "";
    let random_value = Math.floor(Math.random() * 2);
    if (random_value === 1) start_user = "X";
    else start_user = "O";
    this.setState({
      current_player: start_user,
      next_move: start_user + "'s turn",
      announcer: ""
    });
  }

  handlePlayerChoice = (e) => {
    let new_values = JSON.parse(JSON.stringify(this.state.values));
    let player = JSON.parse(JSON.stringify(this.state.current_player));
    // if no players choose the spot yet, proceed. Else ignore.
    if (new_values[e.target.id] === ""){
      new_values[e.target.id] = player;
      player === "O" ? player = "X" : player = "O";
      this.setState({
        values: new_values,
        current_player: player,
        next_move: player + "'s turn"
      });
    }
    if (!this.checkWinner(new_values))
      this.checkDraw(new_values)
  }

  checkDraw = (values) => {
    if (!values.includes("")){
      this.setState({
        values: values,
        announcer: "It's a draw."
      });
    }
  }

  checkWinner = (values) => {
    /*
    [0,1,2]
    [3,4,5]
    [6,7,8]

    - winning condition in index form-
    horizontal: [0,1,2], [3,4,5], [6,7,8]
    vertical: [0,3,6], [1,4,7], [2,5,8]
    diagonal: [0,4,8], [2,4,6]
    */
    const winning_condition = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]];
    let somebody_won = false;

    for (let i in winning_condition){
      const [a,b,c] = winning_condition[i];
      if (values[a] &&
          values[a] === values[b] &&
          values[a] === values[c]){
            somebody_won = true;
            this.setState({
              values: values,
              announcer: "Player " + values[a] + " win!!"
            });
            break;
          }
    }
    return somebody_won;
  }

  handleNewGame = () => {
    this.initGame();
  }

  handleReturnHome = () => {
    return <Link to="/" />;
  }

  render() {
    return (
        <div className='pvp'>
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
          <Board values={this.state.values} handlePlayerChoice={this.handlePlayerChoice} is_computer_turn={false}/>
        </div>
    )
  }
}

export default PVP