import React from "react";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./Base";
 
import pdf1 from '../documents/forms-for-technical-activities-during-vacation.pdf';
import pdf2 from '../documents/free-mess-permission-form.pdf';
import pdf3 from '../documents/form-for-permission-for-tour-programme.pdf';  
import pdf4 from '../documents/no-liability-rt.pdf';
import pdf5 from '../documents/notice--form-regarding-vacation-stay-in-hostel.pdf';
import pdf6 from '../documents/form-for-remedial-classes--supplementary-examination.pdf';
import pdf7 from '../documents/form-of-technical-activities-in-nitc-students-during-vacation.pdf';
import pdf8 from '../documents/vacation-form.pdf';
import pdf9 from '../documents/undertaking-to-be-submitted-for-room-allotment-2017.pdf';
import pdf10 from '../documents/undertaking-to-be-submitted-for-room-allotment---2018-2019.pdf';
import pdf11 from '../documents/temporary-vacacation-of-room--liability.pdf';
import pdf12 from '../documents/permission-for-mess-exemption.pdf';
import pdf13 from '../documents/form-for-room--hostel-change.pdf';

 
  const pdfs = [
    {name: "Forms for Technical Activities during Vacation", url: pdf1},  
    {name: "Free Mess Permission Form", url: pdf2},
    {name: "Form for Permission for Tour Programme", url: pdf3},
    {name: "No Liability RT", url: pdf4},
    {name: "Notice & Form Regarding Vacation stay in Hostel", url: pdf5},
    {name: "Form for Remedial Classes/Supplimentary Examination ", url: pdf6},
    {name: "Form for Technical Activities in NITC students during vacation", url: pdf7},
    {name: "Vacation Form", url: pdf8},
    {name: "Undertaking to be Submitted for Room Allotment 2017-2018", url: pdf9},
    {name: "Undertaking to be Submitted for Room Allotment 2018-2019", url: pdf10},
    {name: "Temporary Vacation of Room & Liability", url: pdf11},
    {name: "Permission for Mess Exemption", url: pdf12},
    {name: "Form for Room/Hostel Change", url: pdf13},
  ]


const downloadPdf = (url,name) => {
    const link = document.createElement("a");
    link.href =url ;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const PDFDownload = () => {
    return (
      
     
  <Base  >
    <div style={{textAlign:"center"}} >
    <h6 style={{color:"#3B5CDE",margin:"0 0 8",fontSize:"14px"}} >FORMS AND APPLICATIONS</h6>
    <h5 style={{color:"#091235",fontSize:"21px",margin:"0 0 18"}}>Forms and Formats</h5>
    <p style={{color:"#3B5CDE",padding:"0 0 8",fontSize:"14px"}} >General Forms & Formats</p>
    <center><hr style={{border:"2px solid #FFED00", width:"35%"}}/></center>


    </div>
    <div className="mb-5">
        {pdfs.map((pdf) => (
        <div  className="container" style={{ cursor: "pointer" }} key={pdf.name} onClick={(event) => {
            console.log(event.target.className);
            if(event.target.className === "open") downloadPdf(pdf.url,pdf.name);
          }}>
          <Row> 
            <Col xs="12" md="9" lg="10" padding="0 0 10px 0" >
            <a target="_blank" href={pdf.url}>
            {pdf.name}
              
            </a>
            </Col> 
            {/* <Col  xs="12" lg="1" style={{float:"left",width:"50%"}}></Col> */}
            <Col xs="12" md="3" lg="2" padding="0 0 10px 0">
            {/* <FaPrint/>
            <h4>print</h4> */}
            <a  target="_blank" href={pdf.url} >
             <img src="https://nitc.ac.in/xc-assets/icons/Print_light.png"/>
             Print
            </a>
            <a  className="download" href={pdf.url}>
             <img src="https://nitc.ac.in/xc-assets/icons/Import_light.png" />
              Download
            </a>
            </Col>
            
          </Row>
        </div>
        ))}
      </div>

    </Base>
    
  );
        }
      

export default PDFDownload;
