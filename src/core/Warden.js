import {React,useEffect,useState} from "react";
import Base from "./Base";
import { Col, Row } from "react-bootstrap";
import { MDBInput } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal_1 from "./Modal_1.js";
import Modal from 'react-bootstrap/Modal';
import "../styles.css";

function Warden() {

    const changeClass = (im) => {
        im.className = "card showCard"

    }
    const config = {
        rootMargin:"0px 0px 0px 0px",
        threshold: 0
    }
    useEffect(()=>{

        const observer = new window.IntersectionObserver((entries,self)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting)
                {
                    changeClass(entry.target)
                    self.unobserve(entry.target)
                }

            })
        })
        const obs = document.querySelectorAll('.card')
        obs.forEach((ob)=>{
            observer.observe(ob)
        },config)

        return ()=>{
            obs.forEach((ob)=>{
                observer.unobserve(ob)
            })
        }

    },[]);

    //search section
    const [search,setsearch]=useState("");
    const [details,setdetails]=useState("Student details");
    //edit chief warden section
    function Modal2(props) {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
        return (
          <>
            <p style={{display:"inline-block", fontSize:"20px"}} onClick={handleShow}>
              {props.content.title}
            </p>
            <Modal show={show} onHide={handleClose} animation={false} keyboard={true}>
            
            <Modal.Body>
                <p>Name: {props.content.name}</p>
                <p>Roll number: {props.content.roll}</p>
                <p>Phone number: {props.content.phno}</p>
                <center><h5>{props.content.title}</h5></center>
                <p>{props.content.complaint}</p>
            </Modal.Body>
            
              <Modal.Footer>
              
                <Button  style={{backgroundColor:"red"}}>
                  Delete
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
    let arr=[
        {
            name:"Rajesh Kumar",
            roll:"B160793CS",
            phno:"9182736540",
            title:"Wi-Fi not working in C Hostel.",
            date:"18-03-2023",
            complaint:"The Wi-Fi in C Hostel is always slow or not working at all. I need to be able to study and do my homework online, but it's impossible with such a bad connection. Could you please look into this matter."
        },
        {
            name:"Ramesh Babu",
            roll:"B160793CS",
            phno:"9182736540",
            title:"Water supply is not working in MHB-1.",
            date:"20-03-2023",
            complaint:"Water supply in MHB-1 hostel has not been functioning properly for the past few days. Despite our repeated attempts to inform the maintenance staff, the issue has not been resolved yet. We are facing a lot of inconvenience due to this. Please look into this matter."
        },
        {
            name:"Dinesh Kumar",
            roll:"B160793CS",
            phno:"9182736540",
            title:"Request to open a new vegetarian mess in MHB-1.",
            date:"19-03-2023",
            complaint:"There is no vegetarian mess in MHB-1 hostel. We have to travel all the way to the main campus to get our food. This is a huge inconvenience for us. Please look into this matter."
        },
        {
            name:"Meghana Pothuri",
            roll:"B160793CS",
            phno:"9182736540",
            title:"Unhygienic food in the MLH mess.",
            date:"19-03-2023",
            complaint:"The food in the MLH mess is not hygienic. The food is not cooked properly and is not fresh. We are facing a lot of health issues due to this. Please look into this matter."
        },
        {
            name:"Swift Taylor",
            roll:"B160793CS",
            phno:"9182736540",
            title:"Lifts in MHB-1 are not working properly.",
            date:"19-03-2023",
            complaint:"The lifts in MHB-1 hostel are not working properly. They are very slow and often get stuck. We are facing a lot of inconvenience due to this. Please look into this matter."
        }
        
    ]
    return (
        <Base title="Warden">
            <h1 className="mt-3 mb-2"><center>Warden</center></h1>
            
            <div className="card" >
                <h2 align="center" className="mb-4">Search Student</h2>
                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"22px"}}>Roll Number:</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput value={search}  id='typeText' style={{backgroundColor:"white"}} type='text' onChange={(x)=>{setsearch(x.target.value)}} />
                    </Col>
                </Row>
                <Row>
                    <Col align={'right'}>
                        <Modal_1  heading="Search" className="me-2 mt-3" content={details}/>
                    </Col>
                </Row>
            </div>
            <div className="card" >
                <h2 align="center" className="mb-4">Complaints</h2>
                
                <Row style={{textAlign:"center"}}>
                    <Col  xs="3" className="d-none d-md-block">
                        <h3 style={{display:"inline-block", fontSize:"25px"}}>Date</h3>
                    </Col>

                    <Col xs="3"  className="d-none d-md-block">
                        <h3 style={{display:"inline-block", fontSize:"25px"}}>Name</h3>
                    </Col>
                    <Col xs="3"  className='d-md-none'></Col>
                    <Col  xs="12" md='6'>
                        <h3 style={{display:"inline-block", fontSize:"25px"}}>Title</h3>
                    </Col>
                </Row>
                <div style={{height:"200px" ,overflowX:"hidden" ,overflowY:"auto"}}>
                {arr.map((x)=>{
                    return (
                    <Row style={{textAlign:"center"}}>
                        <Col  xs="3" className="d-none d-md-block">
                            <p style={{display:"inline-block", fontSize:"18px"}}>{x.date}</p>
                        </Col>
                        <Col xs="3" className="d-none d-md-block">
                            <p style={{display:"inline-block", fontSize:"18px"}}>{x.name}</p>
                        </Col>
                        <Col xs="3" className='d-md-none'></Col>
                        <Col xs="12" md='6' className="complaint-title">
                            <Modal2  className="me-2 mt-3" content={x}/>
                        </Col>
                    </Row>)
                })}
                </div>
            </div>
            <div className="card" >
                <h2 align="center" className="mb-4">Anonymous Complaints</h2>

                <Row align="center">
                    <Col  xs="3" className="d-none d-md-block">
                        <h3 style={{display:"inline-block", fontSize:"25px"}}>Date</h3>
                    </Col>
                    <Col xs="3"></Col>
                    <Col  xs="12" md='6'>
                        <h3 style={{display:"inline-block", fontSize:"25px"}}>Title</h3>
                    </Col>
                </Row>
                <div style={{height:"200px" ,overflowX:"hidden" ,overflowY:"auto"}}>
                    {arr.map((x)=>{
                        return (
                            <Row align="center">
                                <Col  xs="3" className="d-none d-md-block">
                                    <p style={{display:"inline-block", fontSize:"18px"}}>{x.date}</p>
                                </Col>
                                <Col xs="3"></Col>
                                <Col  xs="12" md='6' className="complaint-title">
                                    <Modal2  className="me-2 mt-3" content={x}/>
                                </Col>
                            </Row>)
                    })}
                </div>
            </div>
            </Base>
    );
}

export default Warden;
