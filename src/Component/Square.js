import React from 'react'

function Square({ id, onClick, value }) {
  return (
    <button className="square" id={id} onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
