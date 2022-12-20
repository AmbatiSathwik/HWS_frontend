import React from "react";
import MessAdminProfile from "../mess/MessAdminProfile";
import StudentProfile from "../student/StudentProfile";

function Dashboard() {
  const Type = () => {
    const role = localStorage.getItem("role");
    if (role === "student") {
      return <StudentProfile />;
    }
    if (role === "messadmin") {
      return <MessAdminProfile />;
    }
  };
  return <Type />;
}

export default Dashboard;
