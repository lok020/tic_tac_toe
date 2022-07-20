import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

function Setting( {change_ct} ) {
  const [curColor, setCurColor] = useState( window.localStorage.getItem("ttt-color-theme") );

  const handleColorTheme = (e) => {
    window.localStorage.setItem('ttt-color-theme', e.target.id);
    setCurColor(e.target.id);
    change_ct();
  }

  return (
    <div className='setting'>
      <div className='setting-row'>
        <label className='title'>{"Color Theme:"}</label>
        <div className={'color-theme color-1 ' + (curColor === "1" ? "selected" : "")} id={"1"} onClick={handleColorTheme}/>
        <div className={'color-theme color-2 ' + (curColor === "2" ? "selected" : "")} id={"2"} onClick={handleColorTheme}/>
        <div className={'color-theme color-3 ' + (curColor === "3" ? "selected" : "")} id={"3"} onClick={handleColorTheme}/>
      </div>
      <div className='setting-row'>
        <Link to="/" className="home-button">
          <div>{"Return Home"}</div>
        </Link>
      </div>
    </div>
  )
}

export default Setting
