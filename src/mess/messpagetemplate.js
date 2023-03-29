import React from "react";
import { Col, Row } from "react-bootstrap";

function img(name, image) {
  return (
    <Col xs="12" lg="4">
      <img src={image} alt={name} width="100%" />
    </Col>
  );
}

function text(messDetails) {
  return (
    <Col xs="12" lg="6">
      <h3>{messDetails.description}</h3>
    </Col>
  );
}
function Messdetails({
  name,
  image,
  mcname,
  mcphno,
  boysCount,
  girlsCount,
  details,
}) {
  let messdetails = details[name];
  return (
    <div className="card" style={{ backgroundColor: "#ECECEC" }}>
      <h2 align="center">{name}</h2>

      <div className="m-5">
        <Row>
          {img(name, image)}
          <Col xs="12" lg="1"></Col>
          <Col>
            {text(messdetails)}
            <h2>mess-contractor:{mcname}</h2>
            <h2>mobile:{mcphno}</h2>
            <h2>boys-count:{boysCount}</h2>
            <h2>girls-count:{girlsCount}</h2>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Messdetails;
