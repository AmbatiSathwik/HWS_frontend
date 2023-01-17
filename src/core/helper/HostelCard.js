import React from "react";
import { Col, Row } from "react-bootstrap";

function img(props)
{
    return(
        <Col xs="4">
            <img src={props.image} alt={props.name} width="100%" />
        </Col>
    );
}

function text(props)
{
    return(
        <Col xs="6">
            <p>{props.Hosteldetails.description}</p>
            <p>
                <strong>Chief Warden :</strong> {props.Hosteldetails.warden}
            </p>
            <p>
                <strong>Care Taker :</strong> {props.Hosteldetails.caretaker}
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
        </Col>
    );
}
function HostelCard(props)
{
    if(props.type==="2") return(
        <div id={props.id} className="card">
            <h2 align="center">{props.name}</h2>
            <div className="m-5">
                <Row>
                    {img(props)}
                    <Col xs="1"></Col>
                    {text(props)}
                </Row>
            </div>
        </div>
    );
    else return(
        <div id={props.id} className="card">
            <h2 align="center">{props.name}</h2>
            <div className="m-5">
                <Row>
                    {text(props)}
                    <Col xs="2"></Col>
                    {img(props)}
                </Row>
            </div>
        </div>
    );
}

export default HostelCard;
