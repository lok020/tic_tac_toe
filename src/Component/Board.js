import React, { PureComponent } from 'react'

import Square from './Square';

class Board extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
        
    }
  }

  render() {  
    const { values, handlePlayerChoice } = this.props;

    return (
      <div className='board'>
        <div className="board-row">
          <Square id={0} value={values[0]} onClick={handlePlayerChoice} />
          <Square id={1} value={values[1]} onClick={handlePlayerChoice} />
          <Square id={2} value={values[2]} onClick={handlePlayerChoice} />
        </div>
        <div className="board-row">
          <Square id={3} value={values[3]} onClick={handlePlayerChoice} />
          <Square id={4} value={values[4]} onClick={handlePlayerChoice} />
          <Square id={5} value={values[5]} onClick={handlePlayerChoice} />
        </div>
        <div className="board-row">
          <Square id={6} value={values[6]} onClick={handlePlayerChoice} />
          <Square id={7} value={values[7]} onClick={handlePlayerChoice} />
          <Square id={8} value={values[8]} onClick={handlePlayerChoice} />
        </div>
      </div>
    )
  }
}

export default Board