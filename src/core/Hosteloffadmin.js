import {React,useRef,useEffect,useState} from "react";
import Base from "./Base";
import { Col, Row } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import { MDBInput } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { InputLabel,MenuItem,FormControl,Select } from "@mui/material";
import { TempleHinduSharp } from "@mui/icons-material";
function Hosteloffadmin() {

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
    
    //state variables of hostel office admin

    //notification section
    const [title,settitle]=useState("");
    const [link,setlink]=useState("");

    //search section
    const [search,setsearch]=useState("");

    //edit cheif warden section
    
    const [cheifname,setcheifname]=useState("");
    const [cheifdept,setcheifdept]=useState("");
    const [cheifphno,setcheifphno]=useState("");

    //edit warden section
    const [hostel,sethostel]=useState("");
    const [wardenname,setwardenname]=useState("");
    const [wardendept,setwardendept]=useState("");
    const [wardenphno,setwardenphno]=useState("");
    
    return (
        <Base title="Hosteloffadmin">
            <h1 className="mt-3 mb-2"><center>Hostel Office Admin</center></h1>
            <div className="card">
                <h2 align="center" className="mb-4">Create Notifications</h2>
                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Title :</p>
                    </Col>

                    <Col xs="8" sm="6">
                        <MDBInput value={title} id='typeText' style={{backgroundColor:"white"}} type='text' onChange={ (x)=>{
                          settitle(x.target.value);
                        }} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Link :</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput  value={link} id='typeText' type='text' style={{backgroundColor:"white"}} onChange={ (x)=>{setlink(x.target.value);}}/>
                    </Col>
                </Row>
                <Row>
                    <Col align="right">
                        <Button variant="dark" className="me-2 mt-3" >Create</Button>
                    </Col>
                </Row>
            </div>

            <br></br>

            <div className="card" >
                <h2 align="center" className="mb-4">Search Student</h2>
                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Name/ID:</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput value={search}  id='typeText' style={{backgroundColor:"white"}} type='text' onChange={(x)=>{setsearch(x.target.value)}} />
                    </Col>
                </Row>
                <Row>
                    <Col align="right">
                        <Button variant="dark" className="me-2 mt-3">Search</Button>
                    </Col>
                </Row>
            </div>

            <br></br>

            <div className="card" >
                <h2 align="center" className="mb-4">Edit Cheif Warden</h2>
                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Name/ID:</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput  id='typeText' type='text'style={{backgroundColor:"white"}} value={cheifname} onChange={(x)=>{setcheifname(x.target.value)}} />
                    </Col>
                </Row>

                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Dept :</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput  id='typeText' type='text' style={{backgroundColor:"white"}} value={cheifdept} onChange={(x)=>{setcheifdept(x.target.value)}}  />
                    </Col>
                </Row>

                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Phone :</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput  id='typeText' type='text' style={{backgroundColor:"white"}} value={cheifphno} onChange={(x)=>{setcheifphno(x.target.value)}}  />
                    </Col>
                </Row>

                <Row>
                    <Col align="right">
                        <Button variant="dark" className="me-2 mt-3">Update</Button>
                    </Col>
                </Row>
                `
            </div>

            <br></br>

            <div className="card" >
                <h2 align="center" className="mb-4">Edit Warden</h2>
                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Hostel :</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <FormControl fullWidth >
                            <Select
                                style={{height:"40px",backgroundColor:"white"}}
                                displayEmpty
                                value={hostel}
                                onChange={(x)=>{sethostel(x.target.value)}}
                            >
                                <MenuItem value={"A"}>A Hostel</MenuItem>
                                <MenuItem value={"B"}>B Hostel</MenuItem>
                                <MenuItem value={"C"}>C Hostel</MenuItem>
                                <MenuItem value={"D"}>D Hostel</MenuItem>
                                <MenuItem value={"E"}>E Hostel</MenuItem>
                                <MenuItem value={"F"}>F Hostel</MenuItem>
                                <MenuItem value={"G"}>G Hostel</MenuItem>
                                <MenuItem value={"PG"}>PG1 Hostel</MenuItem>
                                <MenuItem value={"PG2"}>PG2 Hostel</MenuItem>
                                <MenuItem value={"MLH"}>MLH</MenuItem>
                                <MenuItem value={"LH"}>LH </MenuItem>
                                <MenuItem value={"MHB1"}>MHB 1</MenuItem>
                                <MenuItem value={"MHB2"}>MHB 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>

                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Name/ID:</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput  id='typeText' type='text' style={{backgroundColor:"white"}} value={wardenname} onChange={(x)=>{setwardenname(x.target.value)}}  />
                    </Col>
                </Row>

                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Dept :</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput  id='typeText' type='text' style={{backgroundColor:"white"}} value={wardendept} onChange={(x)=>{setwardendept(x.target.value)}}  />
                    </Col>
                </Row>

                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"25px"}}>Phone :</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput  id='typeText' type="number" style={{backgroundColor:"white"}} value={wardenphno} onChange={(x)=>{setwardenphno(x.target.value)}}  />
                    </Col>
                </Row>

                <Row>
                    <Col align="right">
                        <Button variant="dark" className="me-2 mt-3" >Update</Button>
                    </Col>
                </Row>
            </div>
            <br></br>
        </Base>
    );
}

export default Hosteloffadmin;
