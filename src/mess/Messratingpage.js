import React from "react";
import Base from "../core/Base";
import Table from 'react-bootstrap/Table';
import "../styles.css";
import { FaStar } from "react-icons/fa";


const data=[
    {
        MessName: "A Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
        MessName: "B Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
        MessName: "C Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
        MessName: "D Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
        MessName: "E Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
        MessName: "F Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
        MessName: "G Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
        MessName: "PG1 Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
        MessName: "PG2 Mess",
        Quality :"3.0",
        Quantity:"4.0",
        Catering:"3.00",
        CleanlinessAndHygiene:"4.56",
        Punctuality:"5.67",
    },
    {
      MessName: "MLH Mess",
      Quality :"3.0",
      Quantity:"4.0",
      Catering:"3.00",
      CleanlinessAndHygiene:"4.56",
      Punctuality:"5.67",
  },
  {
    MessName: "MBH-1 Mess",
    Quality :"3.0",
    Quantity:"4.0",
    Catering:"3.00",
    CleanlinessAndHygiene:"4.56",
    Punctuality:"5.67",
  },
  {
    MessName: "MBH-2 Mess",
    Quality :"3.0",
    Quantity:"4.0",
    Catering:"3.00",
    CleanlinessAndHygiene:"4.56",
    Punctuality:"5.67",
},



]

function createrow(row){
    return(
    <tbody >
        <tr style={{textAlign:"center"}}>

          <td >{row.MessName}</td>
          <td >{row.Quality}<FaStar style={{color:"gold"}}/></td>
          <td >{row.Quantity}<FaStar style={{color:"gold"}}/></td>
          <td >{row.Catering}<FaStar style={{color:"gold"}}/></td>
          <td >{row.CleanlinessAndHygiene}<FaStar style={{color:"gold"}}/></td>
          <td >{row.Punctuality}<FaStar style={{color:"gold"}}/></td>

        </tr>
      </tbody>);
}

function Messratingspage() {
  return (
    <Base title="">
    <div>
    <h1 className="m-3" > <center>Mess Ratings<FaStar style={{color:"gold"}}/><FaStar style={{color:"gold"}}/></center></h1>{"\n"}
    <p className=""><center>Following scores are based on the feedback received from students and are out of 5<FaStar style={{color:"gold"}}/>.</center></p>
<div style={{display:"flex",justifyContent:"center"}} className="px-5">
   
    <Table striped bordered hover responsive style={{textAlign:"center",backgroundColor:"white"}} >
      <thead>
        <tr style={{backgroundColor:"brown",color:"white"}}>
          <th >Mess Name</th>
          <th >Quality</th>
          <th >Quantity</th>
          <th >Catering</th>
          <th >Cleanliness and Hygiene</th>
          <th >Punctuality</th>
        </tr>
      </thead>

      {data.map(createrow)}
      
    </Table>
    </div>
    </div>
    </Base>
  );
}

export default Messratingspage;