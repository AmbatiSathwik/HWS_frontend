import React from "react";
import { Col, Row } from "react-bootstrap";

function img(props)
{
    return(
        <Col xs="12" lg="4">
            <img src={props.image} alt={props.name} width="100%" />
        </Col>
    );
}

function text(props)
{
    return(
        <Col xs="12" lg="6">
            <h3>{props.messDetails.description}</h3>
             
        </Col>
    );
}
function Messdetails(props)
{
      return(
        <div id={props.id} className="card" style={{backgroundColor:"#ECECEC"}}>
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
     
}

 

 


export default Messdetails ;