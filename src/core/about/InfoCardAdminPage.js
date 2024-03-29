import React from "react";
import profile from "../../assets/GIF/identity.gif";

function InfoCardAdminPage({ photo, name, position,department, web, phone,  mail }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3  info-card">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={photo} alt="Image of member" />
        </div>
        <div className="team-content">
          {/* <img className="about-img" src={profile} alt="profile gif" /> */}
          <h3 className="name">{name}</h3>
          <h4 className="title">{position}</h4>
          <h4 className="title">{department}</h4>
        </div>
        <ul className="social">
          <li>
            <a href={web} className="fa fa-globe" aria-hidden="true"></a>
          </li>
          <li>
            <a
              href={phone}
              className="fa fa-phone"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a href={mail} className="fa fa-envelope" aria-hidden="true"></a>
          </li>
           
        </ul>
      </div>
    </div>
  );
}

export default InfoCardAdminPage;
