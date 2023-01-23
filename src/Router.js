import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./core/about/About";
import ExploreHostels from "./core/ExploreHostels";
import ExploreMess from "./core/ExploreMess";
import Home from "./core/Home";
import MessAdminProfile from "./mess/MessAdminProfile";
import StudentChangePassword from "./student/StudentChangePassword";
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
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<About />} />
          <Route path="/mess" exact element={ <MessAdminProfile/>} />
          <Route path="/hostels/:name" exact element={ <ExploreHostels/>} />
          <Route
            path="/studentpasswordChange"
            exact
            element={<StudentChangePassword />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
