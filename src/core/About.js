import React ,{useEffect}from "react";
import Base from "./Base";
import { Link } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import AH from "../assets/images/ahostel1.jpg";
import BH from "../assets/images/bhostel.jpg";
import CH from "../assets/images/chostel.jpg";
import DH from "../assets/images/dhostel.jpg";
import EH from "../assets/images/ehostel.jpg";
import FH from "../assets/images/fhostel.jpg";
import GH from "../assets/images/ghostel.jpg";
import PG1H from "../assets/images/pg1hostel.jpg";


import profile from "../../src/assets/GIF/rightarrow.gif";
let arr=[
  {
    id:1,
    name:"A",
    imageSrc:AH,
    warden:"abcd",
    phno:999999999,
  },
  {
    id:2,
    name:"B",
    imageSrc:BH,
    warden:"abcd",
    phno:999999999,
  },
  {
    id:3,
    name:"C",
    imageSrc:CH,
    warden:"abcd",
    phno:999999999,
  },
  {
    id:4,
    name:"D",
    imageSrc:DH,
    warden:"abcd",
    phno:999999999,
  },
  {
    id:5,
    name:"E",
    imageSrc:EH,
    warden:"abcd",
    phno:999999999,
  },
  {
    id:6,
    name:"F",
    imageSrc:FH,
    warden:"abcd",
    phno:999999999,
  },
  {
    id:7,
    name:"G",
    imageSrc:GH,
    warden:"abcd",
    phno:0,
  },
  {
    id:8,
    name:"PG1",
    imageSrc:PG1H,
    warden:"abcd",
    phno:0,
  }
];




function About() {

  return (
    <Base title="Hostels" >  
    <Row xs={1} sm={2} md={2} lg={3} className="mx-auto"  style={{margin:"20px"}}>
      {arr.map((x) => (
        <Col >
            <Card style={{ width:'80%',height:"90%",padding:"0px",backgroundColor:"white" }} className="hostel_card">
          <Card.Img variant="top" style={{borderRadius:"20px 20px 0px 0px"}} src={x.imageSrc} />
          <Card.Body>
            <center><Card.Title >Hostel {x.name}</Card.Title></center>
            <h6>
             Warden: {x.warden}
            </h6>
            <h6>
             Mobile: {x.phno}
            </h6>
            <Link to={"/explore_hostel#A_Hostel"} state={{from:x.name}}><img className="img-fluid" style={{width:"40px",backgroundColor:"#f8efef",marginLeft:"80%",borderRadius:"100%"}} src={profile}>
            </img>
            </Link>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row> 
  </Base>
  );
}

export default About;









