import React, { useEffect, useState } from "react";
import Base from "./Base";
import { messDetails,getMessAdminByMessId } from "../mess/helper/messapicalls";

import {Link, useNavigate} from "react-router-dom";
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
const lod = require('lodash');
 


const details = messDetails().data;


let arr=[
  {
    value:"A",
    id:1,
    name:"A Mess",
    imageSrc:AH,
    contractor:"abcd",
    phno:999999999,
    info: details.ahostel,
  },
  {
    value:"B",
    id:2,
    name:"B Mess",
    imageSrc:BH,
    contractor:"abcd",
    phno:999999999,
    info: details.bhostel,
  },
  {
    value:"C",
    id:3,
    name:"C Mess",
    imageSrc:CH,
    contractor:"abcd",
    phno:999999999,
    info: details.chostel,
  },
  {
    value:"D",
    id:4,
    name:"D Mess",
    imageSrc:DH,
    contractor:"abcd",
    phno:999999999,
    info: details.dhostel,
  },
  {
    value:"E",
    id:5,
    name:"E Mess",
    imageSrc:EH,
    contractor:"abcd",
    phno:999999999,
    info: details.ehostel,
  },
  {
    value:"F",
    id:6,
    name:"F Mess",
    imageSrc:FH,
    contractor:"abcd",
    phno:999999999,
    info: details.fhostel,
  },
  {
    value:"G",
    id:7,
    name:"G Mess",
    imageSrc:GH,
    contractor:"abcd",
    phno:999999999,
    info: details.ghostel,
  },
  {
    value:"PG1",
    id:8,
    name:"PG1 Mess",
    imageSrc:PG1H,
    contractor:"abcd",
    phno:999999999,
    info: details.pg1hostel,
  },
  {
    value:"PG2",
    id:9,
    name:"PG2 Mess",
    imageSrc:PG1H,
    contractor:"abcd",
    phno:999999999,
    info: details.ahostel
  },
  {
    value:"MHG",
    id:10,
    name:"Mega Hostel Girls Mess",
    imageSrc:PG1H,
    contractor:"abcd",
    phno:999999999,
    info: details.ahostel,
    
  },
  {
    value:"MHB1",
    id:11,
    name:"Mega Hostel Boys 1 Mess",
    imageSrc:PG1H,
    contractor:"abcd",
    phno:999999999,
    info: details.ahostel,
  },
  {
    value:"MHB2",
    id:12,
    name:"Mega Hostel Boys 2 Mess",
    imageSrc:PG1H,
    contractor:"abcd",
    phno:999999999,
    info: details.ahostel,
  }
];
function ExploreMess() {
  console.log(arr);
  const [temp, settemp] = useState(arr);
  useEffect(() => {
    let i=0;
     
    while(i<12){
      // console.log(i);
      i++;
    
    getMessAdminByMessId(i).then((data) => {
       
      //  console.log(i);
      //  console.log(data);
      if(data.data==null){
        return;
      }
      
      arr.find((x)=>x.id===data.data.messId).contractor=data.data.name;
      
      
      arr.find((x)=>x.id===data.data.messId).phno=data.data.phno;
       
      settemp(arr);
    })
    .catch((err) => {
      console.log(err);
    });
     
  }});

  return (
    <Base title="mess" >  
    <Row xs={1} sm={2} md={2} lg={3} className="mx-auto"  style={{margin:"20px"}}>
      {arr.map((x) => (
        <Col >
            <Card style={{ width:'80%',height:"90%",padding:"0px",backgroundColor:"white" }} className="hostel_card">
          <Card.Img variant="top" style={{borderRadius:"20px 20px 0px 0px"}} src={x.imageSrc} />
          <Card.Body>
            <center><Card.Title > {x.name}</Card.Title></center>
            <h6>
             contractor: {x.contractor}
            </h6>
            <h6>
             Mobile: {x.phno}
            </h6>
            <Link to={"/messpage/"+lod.lowerCase(x.name)} state={{from:x.info,id:x.id}}><img className="img-fluid" style={{width:"40px",backgroundColor:"#f8efef",marginLeft:"80%",borderRadius:"100%"}} src={profile}>
            </img>
            </Link>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row> 
  </Base>)
}

export default ExploreMess;