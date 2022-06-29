import React from "react";
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
  return (
    <BrowserRouter basename="/tic_tac_toe">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="PVP" element={<PVP />} />
          <Route path="PVE" element={<PVE />} />
          <Route path="Setting" element={<Setting />} />
          <Route path="Bonus" element={<Bonus />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Tic_Tac_Toe;
