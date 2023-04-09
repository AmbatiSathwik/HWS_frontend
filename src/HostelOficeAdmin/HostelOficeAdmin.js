import { React, useEffect, useState } from "react";
import Base from "../core/Base";
import { Col, Row } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { MenuItem, FormControl, Select } from "@mui/material";
import Modal_1 from "../core/Modal_1.js";
import "../styles.css";
import { createNotification } from "../core/helper/coreapicalls";

function Hosteloffadmin() {
  const changeClass = (im) => {
    im.className = "card showCard";
  };
  const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  };
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          changeClass(entry.target);
          self.unobserve(entry.target);
        }
      });
    });
    const obs = document.querySelectorAll(".card");
    obs.forEach((ob) => {
      observer.observe(ob);
    }, config);

    return () => {
      obs.forEach((ob) => {
        observer.unobserve(ob);
      });
    };
  }, []);

  //state variables of hostel office admin

//notification section
const [name,setname]=useState("");
const [url,seturl]=useState("");
// useeffect for notifications
const uploadpdf = (e) => {
   e.preventDefault();
       createNotification(name,url)
}

  //search section
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState("student details");
  //edit cheif warden section

  const [cheifName, setcheifName] = useState("");
  const [cheifdept, setcheifdept] = useState("");
  const [cheifphno, setcheifphno] = useState("");

  //edit warden section
  const [hostel, sethostel] = useState("");
  const [wardenname, setwardenname] = useState("");
  const [wardendept, setwardendept] = useState("");
  const [wardenphno, setwardenphno] = useState("");

  return (
    <Base title="Hosteloffadmin">
      <h1 className="mt-3 mb-4">
        <center>Hostel Office Admin</center>
      </h1>
      <div className="card" style={{ width: "85%", margin: "10px auto" }}>
        <h2 align="center" className="mb-4">
          Create Notifications
        </h2>
        <form onSubmit={uploadpdf}>
                        <div className="form-group">

                            <label for="exampleFormControlInput1">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={(x)=>{setname(x.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Url</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Url" onChange={(x)=>{seturl(x.target.value)}}/>
                        </div>
                        <input type="submit" />
                     </form>

      </div>

      <br></br>

      <div className="card" style={{ width: "85%", margin: "10px auto" }}>
        <h2 align="center" className="mb-4">
          Search Student
        </h2>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>
              Name/ID:
            </p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              value={search}
              id="typeText"
              style={{ backgroundColor: "white" }}
              type="text"
              onChange={(x) => {
                setSearch(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col align="right">
            <Modal_1 heading="Search" className="me-2 mt-3" content={details} />
          </Col>
        </Row>
      </div>

      <br></br>

      <div className="card" style={{ width: "85%", margin: "10px auto" }}>
        <h2 align="center" className="mb-4">
          Edit Cheif Warden
        </h2>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>
              Name/ID:
            </p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              id="typeText"
              type="text"
              style={{ backgroundColor: "white" }}
              value={cheifName}
              onChange={(x) => {
                setcheifName(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>Dept :</p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              id="typeText"
              type="text"
              style={{ backgroundColor: "white" }}
              value={cheifdept}
              onChange={(x) => {
                setcheifdept(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>Phone :</p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              id="typeText"
              type="text"
              style={{ backgroundColor: "white" }}
              value={cheifphno}
              onChange={(x) => {
                setcheifphno(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col align="right">
            <Modal_1
              heading="Update"
              className="me-2 mt-3"
              content="Data updated successfully"
            />
          </Col>
        </Row>
        `
      </div>

      <br></br>

      <div className="card" style={{ width: "85%", margin: "10px auto" }}>
        <h2 align="center" className="mb-4">
          Edit Warden
        </h2>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>
              Hostel :
            </p>
          </Col>
          <Col xs="8" sm="6">
            <FormControl fullWidth>
              <Select
                style={{ height: "40px", backgroundColor: "white" }}
                displayEmpty
                value={hostel}
                onChange={(x) => {
                  sethostel(x.target.value);
                }}
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
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>
              Name/ID:
            </p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              id="typeText"
              type="text"
              style={{ backgroundColor: "white" }}
              value={wardenname}
              onChange={(x) => {
                setwardenname(x.target.value);
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>Dept :</p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              id="typeText"
              type="text"
              style={{ backgroundColor: "white" }}
              value={wardendept}
              onChange={(x) => {
                setwardendept(x.target.value);
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>Phone :</p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              id="typeText"
              type="number"
              style={{ backgroundColor: "white" }}
              value={wardenphno}
              onChange={(x) => {
                setwardenphno(x.target.value);
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col align="right">
            <Modal_1
              heading="Update"
              className="me-2 mt-3"
              content="Data updated successfully"
            />
          </Col>
        </Row>
      </div>
      <br></br>
    </Base>
  );
}

export default Hosteloffadmin;
