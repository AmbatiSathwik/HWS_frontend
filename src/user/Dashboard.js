import React from "react";
import { Navigate } from "react-router-dom";
import MessAdminProfile from "../mess/MessAdminProfile";
import StudentProfile from "../student/StudentProfile";
import { isAuthenticated } from "./helper/userapicalls";

function Dashboard() {
  const Type = () => {
    const role = localStorage.getItem("role").slice(1,-1);

    if (role === "student") {
      return <StudentProfile />;
    }
    if (role === "mess-admin") {
      return <MessAdminProfile />;
    }
  };
  return <Type />;
}

export default Dashboard;
