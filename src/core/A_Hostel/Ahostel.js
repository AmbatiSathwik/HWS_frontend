import React from "react";
import Base from "../Base";
import A_Hostel from "./ahostel.jpg";

function Ahostel() {
  return (
    <Base title="A Hostel">
      <img src={A_Hostel} width="100%" />
      <h2>Hostel for first years</h2>
    </Base>
  );
}

export default Ahostel;
