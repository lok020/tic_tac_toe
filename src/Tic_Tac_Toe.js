import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./PAGE/Layout";
import Menu from "./PAGE/Menu";
import PVP from "./PAGE/PVP";
import PVE from "./PAGE/PVE";
import Setting from "./PAGE/Setting";
import Bonus from "./PAGE/Bonus";
import Error from "./PAGE/Error";

import "./CSS/tic_tac_toe.scss";

function Tic_Tac_Toe() {
  useEffect(() => {
    let current_background = window.localStorage.getItem("ttt-color-theme");
    if (current_background === null) window.localStorage.setItem('ttt-color-theme', "1");
    else {
      updateColorTheme();
    }
  })

  const updateColorTheme = () => {
    var root = document.querySelector(':root');
    root.style.setProperty('--main-background', 'var(--background-' + window.localStorage.getItem("ttt-color-theme") + ')');
    root.style.setProperty('--main-text-color', 'var(--text-color-' + window.localStorage.getItem("ttt-color-theme") + ')');
    root.style.setProperty('--accent-background', 'var(--accent-' + window.localStorage.getItem("ttt-color-theme") + ')');
  }

  return (
    <BrowserRouter basename="/tic_tac_toe">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="PVP" element={<PVP />} />
          <Route path="PVE" element={<PVE />} />
          <Route path="Setting" element={<Setting change_ct={updateColorTheme}/>} />
          {/* <Route path="Bonus" element={<Bonus />} /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Tic_Tac_Toe;
