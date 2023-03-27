import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function img(props) {
  return (
    <Col xs="12" lg="4">
      <img src={props.image} alt={props.name} width="100%" />
    </Col>
  );
}

function text(props) {
  return (
    <Col xs="12" lg="6">
      <p>{props.Hosteldetails.description}</p>
      <p>
        <strong>Warden :</strong> {props.wardenname}
      </p>
      <p>
        <strong>Care Taker :</strong> {props.caretakername}
      </p>
      <p>
        <strong>Number of rooms :</strong> {props.Hosteldetails.rooms}
      </p>
      <p>
        <strong>Number of floors :</strong> {props.Hosteldetails.floors}
      </p>
      <p>
        <strong>Number of Inmates :</strong> {props.Hosteldetails.inmates}
      </p>
      <p>
        <strong>Warden Phone No :</strong> {props.phno}
      </p>
    </Col>
  );
}

function HostelCard(props) {
  if (props.type === "2")
    return (
      <div
        id={props.id}
        className="card"
        style={{ backgroundColor: "#ECECEC" }}
      >
        <h2 align="center">{props.name}</h2>
        <div className="m-5">
          <Row>
            {img(props)}
            <Col xs="12" lg="1"></Col>
            {text(props)}
          </Row>
        </div>
      </div>
    );
  else
    return (
      <div id={props.id} className="card">
        <h2 align="center">{props.name}</h2>
        <div className="m-5">
          <Row>
            {text(props)}
            <Col xs="12" lg="2"></Col>
            {img(props)}
          </Row>
        </div>
      </div>
    );
}

function Facilities(props) {
  if (props.hasFacility === true)
    return (
      <div>
        <center>
          <h1>Facilities</h1>
        </center>
        <div
          className="card"
          style={{ backgroundColor: "#ECECEC", textAlign: "center" }}
        >
          <h2>{props.facilityName}</h2>
          <div className="m-5">
            <Row>
              <Col xs="12" lg="6">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
              <Col xs="12" lg="2"></Col>
              <Col xs="12" lg="4">
                <img
                  src={props.image}
                  alt={props.name}
                  width="100%"
                  style={{ margin: "auto" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
}

function GroupCards(props) {
  return (
    <div>
      <Row>
        <Col sm="12" md="6" lg="4">
          <Card style={{ height: "250px" }}>
            <Card.Body>
              <Card.Title>Warden</Card.Title>
              <Card.Text>Name :{props.wardenname} </Card.Text>
              <Card.Text>Ph No. :{props.phno} </Card.Text>
              <Card.Text>Department : </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4">
          <Card style={{ height: "250px" }}>
            <Card.Body>
              <Card.Title>Care Taker</Card.Title>
              <Card.Text>Name : {props.caretakername} </Card.Text>
              <Card.Text>Ph No. : {props.cphno} </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm="12" md="6" lg="4">
          <Card style={{ height: "250px" }}>
            <Card.Body>
              <Card.Title>Hostel Sec.</Card.Title>
              <Card.Text>Name :{props.hsname} </Card.Text>
              <Card.Text>Ph No. :{props.hsphno} </Card.Text>
              <Card.Text>Room No. : </Card.Text>
              <Card.Text>Department : </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export { HostelCard, Facilities, GroupCards };
