import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ahostel from "./core/A_Hostel/Ahostel";
import Home from "./core/Home";
import Signin from "./user/Signin";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/A_Hostel" exact element={<Ahostel />} />
          <Route path="/login" exact element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
