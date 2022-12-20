import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import A_Hostel from "../assets/images/ahostel.jpg";

function Slider() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img src={A_Hostel} width="100%" height="100%" alt="A_Hostel" />
      </Slide>
    </ImageSlider>
  );
}

export default Slider;
