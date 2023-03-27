import React from "react";
import CheifWarden from "../ChiefWarden/ChiefWarden";
import HostelOficeAdmin from "../HostelOficeAdmin/HostelOficeAdmin";
import MessAdminProfile from "../mess/MessAdminProfile";
import StudentProfile from "../student/StudentProfile";
import { isAuthenticated } from "./helper/userapicalls";

function Dashboard() {
  const Type = () => {
    const role = localStorage.getItem("role").slice(1, -1);

    if (
      role ===
      "32ade5e7c36fa329ea39dbc352743db40da5aa7460ec55f95b999d6371ad20170094d88d9296643f192e9d5433b8d6d817d6777632e556e96e58f741dc5b3550"
    ) {
      return <StudentProfile />;
    }
    if (
      role ===
      "b5762f643468edf47f075f0ea900fb25fb5a302c4ceabaf56f3a6e64f89a07b3938356de2a00b4b03d3052e43848d7db45756db3304e3877d280491515de4801"
    ) {
      return <MessAdminProfile />;
    }
    if (
      role ===
      "5ce11b6691da74dbe9f799fa9a2b5fa54a0a70a6de2eba86daed418eb0a8f76aeeaaa827952984a3de46e83ea5caacd32cbb86fea601b45ac59fe94b0b3baf8d"
    ) {
      return <HostelOficeAdmin />;
    }
    if(role === "3db390eddb0af4f2aac8c7bc7944d694724383352acb3cb047f838602620454dbdcf996d588de5d2ef0219a2965d912e723cd8a7169b7b60cd34b63d7c52ca47")
    {
      return <CheifWarden />
    }
  };
  return <Type />;
}

export default Dashboard;
