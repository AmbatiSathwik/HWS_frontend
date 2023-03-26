import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Ex from "../../assets/images/nitc-logo.png";
import InfoCardAdminPage from "./InfoCardAdminPage";

let about = [
  {
    photo: Ex,
    name: "Sathwik",
    position: "Associate Professor",
    department: "CSE",
    web: "https://github.com",
     
    phone: "https://phone.com",
    mail: "sathwik@gmail.com",
  },
  
];

function Chiefw() {
  let loop = [];
  about.forEach((data) => {
    loop.push(
      <InfoCardAdminPage
        photo={data.photo}
        name={data.name}
        position={data.position}
        department={data.department}
        web={data.web}
        phone={data.phone}
         
        mail={data.mail}
      />
    );
  });

  return (
    <div>
       <h2 align="center" style={{color:"blue"}} className="team">Chief Warden</h2>
      
       
      <div className="team-wrap">
        <div className="container">
          <div className="row  about-wrap">{loop}</div>
        </div>
      </div>
    </div>
  );
}

export default Chiefw;
