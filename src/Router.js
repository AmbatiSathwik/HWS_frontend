import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./core/about/About";
import Administration from "./core/about/Administration";
import ExploreHostels from "./core/ExploreHostels";
import ExploreMess from "./core/ExploreMess";
import Home from "./core/Home";
import MessAdminProfile from "./mess/MessAdminProfile";
import StudentChangePassword from "./student/StudentChangePassword";
import Dashboard from "./user/Dashboard";
import Signin from "./user/Signin";
import Hostels from "./core/Hostels"; 
import Forms from "./core/formspage";
import Messpages from "./mess/messpage";
import Complaint from "./core/complaint";
import Hosteloffadmin from "./core/Hosteloffadmin";
import Messratingspage from "./mess/Messratingpage";
import Cheifwarden from "./core/cheifWarden";
import Warden from "./core/Warden";
import StudentsList from "./core/studentsByHostel";
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
          <Route path="/administration" exact element={<Administration />} />
          <Route path="/mess" exact element={ <MessAdminProfile/>} />
          <Route path="/hostels/:name" exact element={ <Hostels/>} />
          <Route path="/messpage/:name" exact element={<Messpages />} />
          <Route path="/cheifwarden" exact element={<Cheifwarden/>}/>
          <Route path="/formspage" exact element={<Forms />} />
          <Route path="/warden" exact element={<Warden/>}/>
          <Route path="/complaint" exact element={<Complaint />} />
          <Route path="/hostelofficeadmin" exact element={<Hosteloffadmin/>} />
          <Route path="/messratingspage" exact element={<Messratingspage/>}/>
          <Route path="/studentsList" exact element={<StudentsList/>}/>
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
