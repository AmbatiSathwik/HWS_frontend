import React from "react";
import Base from "../core/Base";
import Admin from "../assets/images/mess-admin.png";
import { Col, Row } from "react-bootstrap";

//mess-details-update, messadminarchives,messreviews, students details in mess
function MessAdminProfile() {
  return (
    <Base title="MESS ADMIN DASHBOARD">
      <div className="card">
        <Row>
          <Col xs={6}>
            <img src={Admin} width="100%" alt="admin-logo" />
          </Col >
          <Col xs={6}>
            
          </Col>
        </Row>
      </div>
      <div className="card">
        <h3 align="center">
          Mess Ratings
        </h3>
      </div>
    </Base>
  );
}

export default MessAdminProfile;
