
//import React from "react";
import Base from "../core/Base";
import Admin from "../assets/images/mess-admin.png";
import * as XLSX from "xlsx";
import React, { useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";

//mess-details-update, messadminarchives,messreviews, students details in mess
function MessAdminProfile() {
  const [item,setItem] = useState([])
// useEffect (()=>{

  const readExcel = (file)=>{
    const promise= new Promise((resolve,reject)=>{
      
      const fileReader= new FileReader();
      fileReader.readAsArrayBuffer(file)
      
      fileReader.onload=(e)=>{
        const bufferArray=e.target.result;
        const wb=XLSX.read(bufferArray,{type:'buffer'});
        
        const wsname=wb.SheetNames[0];
        
        const ws=wb.Sheets[wsname];
        const data=XLSX.utils.sheet_to_json(ws);
        resolve(data);
        
      };
      
      fileReader.onerror=(error)=>{
        reject(error);
      };
    });
    promise.then((data)=>{
      setItem(data)
    })
  };
// },[])
  return (
    <Base title="MESS ADMIN DASHBOARD">
      <div className="card">
        <Row>
          <Col xs={6}>
            <img src={Admin} width="100%" alt="admin-logo" />
          </Col>
          <Col xs={6}></Col>
        </Row>
      </div>
      <div className="card">
        <h3 align="center">Mess Ratings</h3>
      </div>
      <div className="card">
        <h3 align="center">Mess Details</h3>
      </div>



      <div className="card">
        <h3 align="center">Student Details</h3>
        <div className="card-body" style={{overflowY: 'scroll', maxHeight: '500px'}}>
          <input type="file" onChange={(e)=>{
            const file=e.target.files[0];
            readExcel(file);
          }}>
          </input>
          <table class="table container">
  <thead>
    <tr>
      <th scope="col">MESS</th>
      <th scope="col">STUDENTNAME</th>
      <th scope="col">ROLLNO</th>
      <th scope="col">DUES</th>
    </tr>
  </thead>
  <tbody>
    {
      item &&
      item.map((data)=>{
        return(<tr key={data.items}>
      <th scope="row">{data.MESS}</th>
      <td>{data.STUDENTNAME}</td>
      <td>{data.ROLLNO}</td>
      <td>{data.DUES}</td>
    </tr>)

      })
      
    }
    
   </tbody>
  </table>  
  <center>
  <button style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', fontSize: '15px', borderRadius: '10px'}}>
        Download
      </button>

  </center>
  
</div>
      </div>



      <div className="card">
        <h3 align="center">Update Mess Details</h3>
      </div>
    </Base>
  );
}

export default MessAdminProfile;

