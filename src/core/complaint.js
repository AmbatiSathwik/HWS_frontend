import React, { useState } from "react";
import Base from "./Base";
import { Link, useNavigate } from "react-router-dom";
import {
  MessComplaintForm,
  HostelComplaintForm,
  AnonymousComplaintForm,
} from "./helper/ComplaintForm";
import profile from "../../src/assets/GIF/rightarrow.gif";
import downArrow from "../../src/assets/images/down.png";
import rightArrow from "../../src/assets/images/right.png";

const showForm = true;

function Complaint() {
  const navigate = useNavigate();
  const [switches, setswitches] = useState({
    mess: true,
    hostel: false,
    anonymous: false,
  });
  const openform = (formtype) => (event) => {
    const swt = switches[formtype];
    setswitches({
      ...switches,
      [formtype]: !swt,
    });
  };
  return (
    <Base title="Hostels">
      <div className="rowcard w-75 mx-auto ">
        <h2 onClick={openform("mess")}>
          Mess complaint
          <img
            className="img-fluid"
            style={{
              width: "40px",
              backgroundColor: "#f8efef",
              marginLeft: "8px",
              borderRadius: "100%",
            }}
            src={switches["mess"] === false ? rightArrow : downArrow}
          ></img>
        </h2>
        {switches["mess"] && <MessComplaintForm />}
      </div>
      <div className="rowcard w-75 mx-auto ">
        <h2 onClick={openform("hostel")}>
          Hostel complaint
          <img
            className="img-fluid"
            style={{
              width: "40px",
              backgroundColor: "#f8efef",
              marginLeft: "8px",
              borderRadius: "100%",
            }}
            src={switches["hostel"] === false ? rightArrow : downArrow}
          ></img>
        </h2>
        {switches["hostel"] && <HostelComplaintForm />}
      </div>
      <div className="rowcard w-75 mx-auto">
        <h2 onClick={openform("anonymous")}>
          Anonymous complaint
          <img
            className="img-fluid"
            style={{
              width: "40px",
              backgroundColor: "#f8efef",
              marginLeft: "8px",
              borderRadius: "100%",
            }}
            src={switches["anonymous"] === false ? rightArrow : downArrow}
          ></img>
        </h2>
        {switches["anonymous"] && <AnonymousComplaintForm />}
      </div>
    </Base>
  );
}

export default Complaint;
