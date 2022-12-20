import React from "react";
import "../styles.css";
import Base from "./Base";
import Slider from "./Slider";
import A_Hostel from "../assets/images/ahostel.jpg";

function Home() {
  return (
    <Base title={""}>
      <div className="SlideShow">
        {/* <Slider /> */}
        <img src={A_Hostel} width="100%" height="100%" alt="A_Hostel" />
      </div>
      <br />
      <div>
        <h2 align="center">Rules and Regulations</h2>
        <ol>
          <li>Fee details will be uploaded every month 10th.</li>
          <li>........</li>
        </ol>
      </div>
    </Base>
  );
}

export default Home;
