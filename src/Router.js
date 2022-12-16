import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ahostel from "./core/A_Hostel/Ahostel";
import Home from "./core/Home";


export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/A_Hostel" exact element={<Ahostel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
