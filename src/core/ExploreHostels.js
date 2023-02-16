import React from "react";
import Base from "./Base";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AH from "../assets/images/ahostel1.jpg";
import BH from "../assets/images/bhostel.jpg";
import CH from "../assets/images/chostel.jpg";
import DH from "../assets/images/dhostel.jpg";
import EH from "../assets/images/ehostel.jpg";
import FH from "../assets/images/fhostel.jpg";
import GH from "../assets/images/ghostel.jpg";
import PG1H from "../assets/images/pg1hostel.jpg";
import profile from "../../src/assets/GIF/rightarrow.gif";
import { hostelDetails } from "./helper/coreapicalls";
const lod = require("lodash");
const details = hostelDetails().data;

let arr = [
  {
    value: "A",
    name: "A Hostel",
    imageSrc: AH,
    warden: "abcd",
    phno: 999999999,
    info: details.ahostel,
  },
  {
    value: "B",
    name: "B Hostel",
    imageSrc: BH,
    warden: "abcd",
    phno: 999999999,
    info: details.bhostel,
  },
  {
    value: "C",
    name: "C Hostel",
    imageSrc: CH,
    warden: "abcd",
    phno: 999999999,
    info: details.chostel,
  },
  {
    value: "D",
    name: "D Hostel",
    imageSrc: DH,
    warden: "abcd",
    phno: 999999999,
    info: details.dhostel,
  },
  {
    value: "E",
    name: "E Hostel",
    imageSrc: EH,
    warden: "abcd",
    phno: 999999999,
    info: details.ehostel,
  },
  {
    value: "F",
    name: "F Hostel",
    imageSrc: FH,
    warden: "abcd",
    phno: 999999999,
    info: details.fhostel,
  },
  {
    value: "G",
    name: "G Hostel",
    imageSrc: GH,
    warden: "abcd",
    phno: 999999999,
    info: details.ghostel,
  },
  {
    value: "PG1",
    name: "PG1 Hostel",
    imageSrc: PG1H,
    warden: "abcd",
    phno: 999999999,
    info: details.pg1hostel,
  },
  {
    value: "PG2",
    name: "PG2 Hostel",
    imageSrc: PG1H,
    warden: "abcd",
    phno: 999999999,
    info: details.ahostel,
  },
  {
    value: "MHG",
    name: "Mega Hostel Girls",
    imageSrc: PG1H,
    warden: "abcd",
    phno: 999999999,
    info: details.ahostel,
  },
  {
    value: "MHB1",
    name: "Mega Hostel Boys 1",
    imageSrc: PG1H,
    warden: "abcd",
    phno: 999999999,
    info: details.ahostel,
  },
  {
    value: "MHB2",
    name: "Mega Hostel Boys 2",
    imageSrc: PG1H,
    warden: "abcd",
    phno: 999999999,
    info: details.ahostel,
  },
];

function About() {
  const navigate = useNavigate();
  return (
    <Base title="Hostels">
      <Row
        xs={1}
        sm={2}
        md={2}
        lg={3}
        className="mx-auto sop"
        style={{ margin: "20px" }}
      >
        
          {arr.map((x) => (
            <div className="hostel-card-div" >
              <Link to={"/hostels/" + x.value + "/"} state={{ from: x.info }}>
                <Col align="center">
                  <Card
                    style={{
                      width: "80%",
                      height: "90%",
                      padding: "0px",
                      backgroundColor: "white",
                    }}
                    className="hostel_card"
                  >
                    <Card.Img
                      variant="top"
                      style={{ borderRadius: "20px 20px 0px 0px" }}
                      src={x.imageSrc}
                    />
                    <Card.Body>
                      <center>
                        <Card.Title> {x.name}</Card.Title>
                      </center>
                      <h6>Warden: {x.warden}</h6>
                      <h6>Mobile: {x.phno}</h6>

                      <img
                        className="img-fluid"
                        style={{
                          width: "40px",
                          backgroundColor: "#f8efef",
                          marginLeft: "80%",
                          borderRadius: "100%",
                        }}
                        src={profile}
                      ></img>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            </div>
          ))}
        
      </Row>
    </Base>
  );
}

export default About;
