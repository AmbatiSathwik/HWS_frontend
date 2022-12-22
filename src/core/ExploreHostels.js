import React from "react";
import { Col, Row } from "react-bootstrap";
import Base from "./Base";
import { hostelDetails } from "./helper/coreapicalls";
import AH from "../assets/images/ahostel1.jpg";
import BH from "../assets/images/bhostel.jpg";
import CH from "../assets/images/chostel.jpg";
import DH from "../assets/images/dhostel.jpg";
import EH from "../assets/images/ehostel.jpg";
import FH from "../assets/images/fhostel.jpg";
import GH from "../assets/images/ghostel.jpg";
import PG1H from "../assets/images/pg1hostel.jpg";

function ExploreHostels() {
  const details = hostelDetails().data;
  return (
    <Base title="">
      <div id="A_Hostel">
        <h2 align="center">A Hostel</h2>
        <div className="m-5">
          <Row>
            <Col xs="4">
              <img src={AH} alt="A Hostel" width="100%" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="5">
              <p>{details.ahostel.description}</p>
              <p>
                <strong>Chief Warden :</strong> {details.ahostel.warden}{" "}
              </p>
              <p>
                <strong>Care Taker :</strong> {details.ahostel.caretaker}{" "}
              </p>
              <p>
                <strong>Number of rooms :</strong> {details.ahostel.rooms}{" "}
              </p>
              <p>
                <strong>Number of floors :</strong> {details.ahostel.floors}{" "}
              </p>
              <p>
                <strong>Number of Inmates :</strong> {details.ahostel.inmates}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="B_Hostel">
        <h2 align="center">B Hostel</h2>
        <div className="m-5">
          <Row>
            <Col xs="4">
              <img src={BH} alt="B Hostel" width="100%" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="5">
              <p>{details.bhostel.description}</p>
              <p>
                <strong>Chief Warden :</strong> {details.bhostel.warden}{" "}
              </p>
              <p>
                <strong>Care Taker :</strong> {details.bhostel.caretaker}{" "}
              </p>
              <p>
                <strong>Number of rooms :</strong> {details.bhostel.rooms}{" "}
              </p>
              <p>
                <strong>Number of floors :</strong> {details.bhostel.floors}{" "}
              </p>
              <p>
                <strong>Number of Inmates :</strong> {details.bhostel.inmates}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="C_Hostel">
        <h2 align="center">C Hostel</h2>
        <div className="m-5">
          <Row>
            <Col xs="4">
              <img src={CH} alt="C Hostel" width="100%" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="5">
              <p>{details.chostel.description}</p>
              <p>
                <strong>Chief Warden :</strong> {details.chostel.warden}{" "}
              </p>
              <p>
                <strong>Care Taker :</strong> {details.chostel.caretaker}{" "}
              </p>
              <p>
                <strong>Number of rooms :</strong> {details.chostel.rooms}{" "}
              </p>
              <p>
                <strong>Number of floors :</strong> {details.chostel.floors}{" "}
              </p>
              <p>
                <strong>Number of Inmates :</strong> {details.chostel.inmates}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="D_Hostel">
        <h2 align="center">D Hostel</h2>
        <div className="m-5">
          <Row>
            <Col xs="4">
              <img src={DH} alt="D Hostel" width="100%" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="5">
              <p>{details.dhostel.description}</p>
              <p>
                <strong>Chief Warden :</strong> {details.dhostel.warden}{" "}
              </p>
              <p>
                <strong>Care Taker :</strong> {details.dhostel.caretaker}{" "}
              </p>
              <p>
                <strong>Number of rooms :</strong> {details.dhostel.rooms}{" "}
              </p>
              <p>
                <strong>Number of floors :</strong> {details.dhostel.floors}{" "}
              </p>
              <p>
                <strong>Number of Inmates :</strong> {details.dhostel.inmates}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="E_Hostel">
        <h2 align="center">E Hostel</h2>
        <div className="m-5">
          <Row>
            <Col xs="4">
              <img src={EH} alt="E Hostel" width="100%" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="5">
              <p>{details.ehostel.description}</p>
              <p>
                <strong>Chief Warden :</strong> {details.ehostel.warden}{" "}
              </p>
              <p>
                <strong>Care Taker :</strong> {details.ehostel.caretaker}{" "}
              </p>
              <p>
                <strong>Number of rooms :</strong> {details.ehostel.rooms}{" "}
              </p>
              <p>
                <strong>Number of floors :</strong> {details.ehostel.floors}{" "}
              </p>
              <p>
                <strong>Number of Inmates :</strong> {details.ehostel.inmates}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="F_Hostel">
        <h2 align="center">F Hostel</h2>
        <div className="m-5">
          <Row>
            <Col xs="4">
              <img src={FH} alt="F Hostel" width="100%" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="5">
              <p>{details.fhostel.description}</p>
              <p>
                <strong>Chief Warden :</strong> {details.fhostel.warden}{" "}
              </p>
              <p>
                <strong>Care Taker :</strong> {details.fhostel.caretaker}{" "}
              </p>
              <p>
                <strong>Number of rooms :</strong> {details.fhostel.rooms}{" "}
              </p>
              <p>
                <strong>Number of floors :</strong> {details.fhostel.floors}{" "}
              </p>
              <p>
                <strong>Number of Inmates :</strong> {details.fhostel.inmates}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="G_Hostel">
        <h2 align="center">G Hostel</h2>
        <div className="m-5">
          <Row>
            <Col xs="4">
              <img src={GH} alt="G Hostel" width="100%" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="5">
              <p>{details.ghostel.description}</p>
              <p>
                <strong>Chief Warden :</strong> {details.ghostel.warden}{" "}
              </p>
              <p>
                <strong>Care Taker :</strong> {details.ghostel.caretaker}{" "}
              </p>
              <p>
                <strong>Number of rooms :</strong> {details.ghostel.rooms}{" "}
              </p>
              <p>
                <strong>Number of floors :</strong> {details.ghostel.floors}{" "}
              </p>
              <p>
                <strong>Number of Inmates :</strong> {details.ghostel.inmates}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="PG1_Hostel">
        <h2 align="center">PG-1 Hostel</h2>
        <div className="m-5">
          <Row>
            <Col xs="4">
              <img src={PG1H} alt="PG1 Hostel" width="100%" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="5">
              <p>{details.pg1hostel.description}</p>
              <p>
                <strong>Chief Warden :</strong> {details.pg1hostel.warden}{" "}
              </p>
              <p>
                <strong>Care Taker :</strong> {details.pg1hostel.caretaker}{" "}
              </p>
              <p>
                <strong>Number of rooms :</strong> {details.pg1hostel.rooms}{" "}
              </p>
              <p>
                <strong>Number of floors :</strong> {details.pg1hostel.floors}{" "}
              </p>
              <p>
                <strong>Number of Inmates :</strong> {details.pg1hostel.inmates}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Base>
  );
}

export default ExploreHostels;
