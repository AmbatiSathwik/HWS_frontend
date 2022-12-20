import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExploreHostels from "./core/ExploreHostels";
import ExploreMess from "./core/ExploreMess";
import Home from "./core/Home";
import Dashboard from "./user/Dashboard";
import Signin from "./user/Signin";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/explore_hostel" exact element={<ExploreHostels />} />
          <Route path="/explore_mess" exact element={<ExploreMess />} />
          <Route path="/login" exact element={<Signin />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
