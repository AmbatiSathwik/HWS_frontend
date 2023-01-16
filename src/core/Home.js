import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Base from "./Base";
import Slider from "./Slider";

function Home() {
  return (
    <Base title={""}>
      <div className="SlideContainer">
        <div className="SlideShow">
          {/* <Slider /> */}
          <div className="SlideShowText">
            Welcome to NITC Hostels
            <br/>
            <div className="homepagebutton">
            <Link to="/explore_hostel" >Explore Hostels </Link>
            </div>
            </div>
        </div>
      </div>
      <br />
      <div className="rules">
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
