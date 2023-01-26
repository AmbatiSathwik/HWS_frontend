import React from "react";
import Base from "../Base";
import Ex from "../../assets/images/nitc-logo.png";
import InfoCard from "./InfoCard";

let about = [
  {
    photo: Ex,
    name: "Sathwik",
    title: "Wanda",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    mail: "sathwik@gmail.com",
  },
  {
    photo: Ex,
    name: "Sathwik",
    title: "Wanda",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    mail: "sathwik@gmail.com",
  },
  {
    photo: Ex,
    name: "Sathwik",
    title: "Wanda",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    mail: "sathwik@gmail.com",
  },
  {
    photo: Ex,
    name: "Sathwik",
    title: "Wanda",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    mail: "sathwik@gmail.com",
  },
  {
    photo: Ex,
    name: "Sathwik",
    title: "Wanda",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    mail: "sathwik@gmail.com",
  },
];

function About() {
  let loop = [];
  about.forEach((data) => {
    loop.push(
      <InfoCard
        photo={data.photo}
        name={data.name}
        title={data.title}
        github={data.github}
        linkedin={data.linkedin}
        twitter={data.twitter}
        mail={data.mail}
      />
    );
  });

  return (
    <Base>
      <h2 align="center">About Us</h2>
      <div className="team-wrap">
        <div className="container">
          <div className="row  about-wrap">{loop}</div>
        </div>
      </div>
    </Base>
  );
}

export default About;
