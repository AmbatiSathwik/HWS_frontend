import React from "react";
import Base from "../Base";
import Ex from "../../assets/images/nitc-logo.png";
import InfoCardAdminPage from "./InfoCardAdminPage";
import Cw from "./Chiefw";
import Hm from "./Hostelmanager";
 
function Admistration() {
  return <div>
    <Base title="Admistration">
    <h2 align="center">Admistration</h2>
    <Cw/>
    <Hm/>
    </Base>
  </div>;
}

export default Admistration;
