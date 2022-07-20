import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Menu() {

  return (
    <div className='menu'>
      <div className='logo'>
        Tic Tac Toe
      </div>
      <div className='game-mode-area'>
        <Link to="/PVP" id="PVP" className="game-mode">
          <div id="PVP" className="title">{"PVP"}</div>
        </Link>
        <Link to="/PVE" id="PVE" className="game-mode">
          <div id="PVE" className="title">{"PVE"}</div>
        </Link>
      </div>
      <Link to="/Setting" id="Setting" className="options">
        <div id="Setting" className="title">{"Setting"}</div>
      </Link>
      {/* <Link to="/Bonus" id="Bonus" className="options">
        <div id="Bonus" className="title">{"Bonus"}</div>
      </Link> */}
      <div className='credit'>{"Design & Develop by Wai Lok Cheng"}</div>
    </div>
  )
}

export default Menu
