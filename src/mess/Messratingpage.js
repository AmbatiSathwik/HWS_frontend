import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import Table from 'react-bootstrap/Table';
import "../styles.css";
import { FaStar } from "react-icons/fa";
import {getMessReviewByMessId} from "./helper/messapicalls";

let arr=[];

const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "long" });
};

function Messratingspage() {

  console.log(arr);

  const [temp, settemp] = useState(arr);
  useEffect(() => {
    let i=0;
     
    //while(i=12){
      //console.log(i);
     // i++;
    
      getMessReviewByMessId(1,2023,3).then((data) => {
       
      //  console.log(i);
        console.log(data);
      if(data.data==null){
        return;
      }
      
      arr[0].quality=data.data.quality;
      arr[0].quantity=data.data.quantity;
      arr[0].catering=data.data.catering;
      arr[0].cleanlinessAndHygiene=data.data.hyginess;
      arr[0].punctuality=data.data.punctuality; 
      settemp(arr);
    })
    .catch((err) => {
      console.log(err);
    });
     
  });


  return (
    <Base title="">

    <div >
    <h1 className="m-3" > <center>Mess Ratings<FaStar style={{color:"gold"}}/><FaStar style={{color:"gold"}}/></center></h1>{"\n"}
    <p className=""><center>Following scores are based on the feedback received from students and are out of 5<FaStar style={{color:"gold"}}/>.</center></p>
<div style={{width:"100%",justifyContent:"center"}} className="px-5">
   
    <Table striped bordered hover responsive style={{textAlign:"center",backgroundColor:"white",width:"90%",marginLeft:"5%",marginRight:"5%"}} >
      <thead>
        <tr style={{backgroundColor:"brown",color:"white"}}>
          <th style={{textAlign:"center"}}>Mess Name</th>
          <th style={{textAlign:"center"}}>Quality</th>
          <th style={{textAlign:"center"}}>Quantity</th>
          <th style={{textAlign:"center"}}>Catering</th>
          <th style={{textAlign:"center"}}>Cleanliness and Hygiene</th>
          <th style={{textAlign:"center"}}>Punctuality</th>
        </tr>
      </thead>

      {arr.map((x) => (
        <tbody >
        <tr style={{textAlign:"center"}}>

          <td >{x.MessName}</td>
          <td >{x.Quality}<FaStar style={{color:"gold"}}/></td>
          <td >{x.Quantity}<FaStar style={{color:"gold"}}/></td>
          <td >{x.Catering}<FaStar style={{color:"gold"}}/></td>
          <td >{x.CleanlinessAndHygiene}<FaStar style={{color:"gold"}}/></td>
          <td >{x.Punctuality}<FaStar style={{color:"gold"}}/></td>

        </tr>
      </tbody>
      ))}
      
    </Table>
    </div>
    </div>
    </Base>
  );
}

export default Messratingspage;