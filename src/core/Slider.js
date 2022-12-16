import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import A_Hostel from "./ahostel.jpg";
import B_Hostel from "./bhostel.jfif";

function Slider() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img src={A_Hostel} width="100%" height="100%" alt="A_Hostel" />
      </Slide>
      <Slide>
        <img src={B_Hostel} width="100%" height="100%" alt="B_Hostel" />
      </Slide>
    </ImageSlider>
  );
}

export default Slider;
