import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Logo from "../assets/images/nitc-logo.png";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col xs={5} className="m-3">
          <Row>
            <Col xs={2}>
              <img src={Logo} width="60" />
            </Col>
            <Col xs={10} className="mt-3 clgname">
              <h5>National Institute of Technology, Calicut</h5>
            </Col>
          </Row>
        </Col>
        <Col xs={5} className="m-3">
          <div align="center">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            This is developed by Hostel Website Development Team.
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
