import { React, useEffect, useState } from "react";
import Base from "../core/Base";
import { Col, Row } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { MenuItem, FormControl, Select, InputLabel} from "@mui/material";
import Modal_1 from "../core/Modal_1.js";
import "../styles.css";


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
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

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
        <center>HOSTEL OFFICE ADMIN</center>
      </h1>
      <div className="card" style={{ width: "85%", margin: "10px auto" }}>
        <h2 align="center" className="mb-4">
          Create Notifications
        </h2>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>Title :</p>
          </Col>

          <Col xs="8" sm="6">
            <MDBInput
              value={title}
              id="typeText"
              style={{ backgroundColor: "white", fontSize: "15px"}}
              type="text"
              placeholder="Enter title of the notification"
              onChange={(x) => {
                setTitle(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "25px" }}>Link :</p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              value={link}
              id="typeText"
              type="text"
              placeholder="Enter link of the notification"
              style={{ backgroundColor: "white" }}
              onChange={(x) => {
                setLink(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <Modal_1
              heading="Create"
              className="me-2 mt-3"
              content="Notification created successfully"
            />
          </Col>
        </Row>
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
              placeholder="Enter Name/ID of the student"
              style={{ backgroundColor: "white", fontSize: "15px"}}
              type="text"
              onChange={(x) => {
                setSearch(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <Modal_1 heading="Search" className="me-2 mt-3" content={details} />
          </Col>
        </Row>
      </div>

      <br></br>

      <div className="card" style={{ width: "85%", margin: "10px auto" }}>
        <h2 align="center" className="mb-4">
          Edit Chief Warden
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
              style={{ backgroundColor: "white", fontSize: "15px"}}
              placeholder="Enter name of the Cheif warden"
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
              style={{ backgroundColor: "white", fontSize: "15px"}}
              placeholder="Enter department of the Chief warden"
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
              style={{ backgroundColor: "white", fontSize: "15px"}}
              placeholder="Enter phone no. of the Chief warden"
              value={cheifphno}
              onChange={(x) => {
                setcheifphno(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col align="center">
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
            <InputLabel id="demo-simple-select-label" style={{fontSize: "15px", color: "#aaaaaa"}}>Hostel</InputLabel>
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
              Name:
            </p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              id="typeText"
              type="text"
              style={{ backgroundColor: "white", fontSize: "15px"}}
              placeholder="Enter name of the Warden"
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
              style={{ backgroundColor: "white", fontSize: "15px"}}
              placeholder="Enter department of the Warden"
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
              style={{ backgroundColor: "white", fontSize: "15px"}}
              placeholder="Enter phone no. of the Warden"
              value={wardenphno}
              onChange={(x) => {
                setwardenphno(x.target.value);
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col align="center">
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
