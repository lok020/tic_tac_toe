import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {

  return (
    <div className='tic-tac-toe'>
      <Outlet />
    </div>
  )
}

export default Layout
