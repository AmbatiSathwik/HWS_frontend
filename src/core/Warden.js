import { React, useEffect, useState } from "react";
import Base from "./Base";
import { Col, Row } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { MenuItem, FormControl, Select } from "@mui/material";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles.css";
import Accordion from "react-bootstrap/Accordion";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

function Accord(data) {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>{data.name}</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p>Name : {data.name}</p>
          <p>Roll number :{data.roll} </p>
          <p>Phone number:{data.phone}</p>
          <p>Hostel:{data.hostel} </p>
          <p>Room number:{data.room}</p>
          <p>Address:{data.address}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function Modal2(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState();
  return (
    <>
      <p
        style={{ display: "inline-block", fontSize: "16px" }}
        onClick={handleShow}
      >
        {props.content.title}
      </p>
      <Modal show={show} onHide={handleClose} animation={false} keyboard={true}>
        <Modal.Body>
          <p>Name: {props.content.name}</p>
          <p>Roll number: {props.content.roll}</p>
          <p>Phone number: {props.content.phone}</p>
          <center>
            <h5>{props.content.title}</h5>
          </center>
          <p>{props.content.complaint}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "red" }}>Delete</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Warden() {
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

  function StudentModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState(studentDetails);
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          Search
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          keyboard={true}
        >
          <div>
            <center className="mt-4 mb-3">
              <h5>Student Details</h5>
            </center>
            <Modal.Body>
              {data.map((x) => {
                return Accord(x);
              })}
            </Modal.Body>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  // function to show the complaints of hostel and mess
  function Complaint() {
    const [data, setData] = useState(arr);
    return (
      <div>
        <Row style={{ textAlign: "center" }}>
          <Col xs="3" className="d-none d-md-block">
            <h3 style={{ display: "inline-block", fontSize: "25px" }}>Date</h3>
          </Col>

          <Col xs="3" className="d-none d-md-block">
            <h3 style={{ display: "inline-block", fontSize: "25px" }}>Name</h3>
          </Col>
          <Col xs="3" className="d-md-none"></Col>
          <Col xs="12" md="6">
            <h3 style={{ display: "inline-block", fontSize: "25px" }}>Title</h3>
          </Col>
        </Row>
        <div
          style={{ height: "200px", overflowX: "hidden", overflowY: "auto" }}
        >
          {data.map((x) => {
            return (
              <Row style={{ textAlign: "center" }}>
                <Col xs="3" className="d-none d-md-block">
                  <p style={{ display: "inline-block", fontSize: "16px" }}>
                    {x.date}
                  </p>
                </Col>
                <Col xs="3" className="d-none d-md-block">
                  <p style={{ display: "inline-block", fontSize: "16px" }}>
                    {x.name}
                  </p>
                </Col>
                <Col xs="3" className="d-md-none"></Col>
                <Col xs="12" md="6" className="complaint-title">
                  <Modal2 className="me-2 mt-3" content={x} />
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    );
  }

  //search section
  const [search, setSearch] = useState("");
  const [room, setRoom] = useState("");
  const [details, setDetails] = useState({});
  const [type, setType] = useState("hostel");
  const [floor, setFloor] = useState("1");
  //static data
  let arr = [
    {
      name: "Rajesh Kumar",
      roll: "B160793CS",
      phone: "9182736540",
      title: "Wi-Fi not working in C Hostel.",
      date: "18-03-2023",
      complaint:
        "The Wi-Fi in C Hostel is always slow or not working at all. I need to be able to study and do my homework online, but it's impossible with such a bad connection. Could you please look into this matter.",
    },
    {
      name: "Ramesh Babu",
      roll: "B160793CS",
      phone: "9182736540",
      title: "Water supply is not working in MHB-1.",
      date: "20-03-2023",
      complaint:
        "Water supply in MHB-1 hostel has not been functioning properly for the past few days. Despite our repeated attempts to inform the maintenance staff, the issue has not been resolved yet. We are facing a lot of inconvenience due to this. Please look into this matter.",
    },
    {
      name: "Dinesh Kumar",
      roll: "B160793CS",
      phone: "9182736540",
      title: "Request to open a new vegetarian mess in MHB-1.",
      date: "19-03-2023",
      complaint:
        "There is no vegetarian mess in MHB-1 hostel. We have to travel all the way to the main campus to get our food. This is a huge inconvenience for us. Please look into this matter.",
    },
    {
      name: "Meghana Pothuri",
      roll: "B160793CS",
      phone: "9182736540",
      title: "Unhygienic food in the MLH mess.",
      date: "19-03-2023",
      complaint:
        "The food in the MLH mess is not hygienic. The food is not cooked properly and is not fresh. We are facing a lot of health issues due to this. Please look into this matter.",
    },
    {
      name: "Swift Taylor",
      roll: "B160793CS",
      phone: "9182736540",
      title: "Lifts in MHB-1 are not working properly.",
      date: "19-03-2023",
      complaint:
        "The lifts in MHB-1 hostel are not working properly. They are very slow and often get stuck. We are facing a lot of inconvenience due to this. Please look into this matter.",
    },
  ];
  let studentDetails = [
    {
      name: "Levi",
      roll: "B160793CS",
      phone: "9182736540",
      hostel: "A",
      room: "123",
      address: "near abcd street",
    },
    {
      name: "Eren",
      roll: "P200989cs",
      phone: "9182736540",
      hostel: "A",
      room: "123",
      address: "near abcd street",
    },
    {
      name: "Mikasa",
      roll: "B240567CS",
      phone: "9182736540",
      hostel: "A",
      room: "123",
      address: "near abcd street",
    },
  ];

  const staffDetails = {
    columns: [
      { label: "Name", field: "name", sort: "asc" },
      { label: "Position", field: "pos", sort: "asc" },
      { label: "Phone number", field: "phone", sort: "asc" },
    ],
    rows: [
      { first: "Suresh", second: "Attendee", third: "999999999" },
      { first: "Ramesh", second: "Caretaker", third: "999999999" },
      { first: "Rajesh", second: "Attendee", third: "999999999" },
    ],
  };

  const archives = {
    columns: [
      { label: "Year", field: "first", sort: "asc" },
      { label: "Name of the Warden", field: "second", sort: "asc" },
      { label: "Department", field: "third", sort: "asc" },
    ],
    rows: [
      { first: "2019-2020", second: "Mr. Abcde", third: "CSE" },
      { first: "2018-2019", second: "Mr. Efijkl", third: "ECE" },
      { first: "2017-2018", second: "Mr. Jon", third: "EEE" },
    ],
  };
  return (
    <Base title="Warden">
      <h1 className="mt-3 mb-2">
        <center>Warden</center>
      </h1>
      <div className="card">
        <h2 align="center" className="mb-4">
          Search Student
        </h2>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "20px" }}>
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
          <Col align={"right"}>
            <StudentModal
              heading="Search"
              className="me-2 mt-3"
              data={studentDetails}
            />
          </Col>
        </Row>
      </div>

      <div className="card">
        <h2 align="center" className="mb-4">
          Roommates Details
        </h2>
        <Row>
          <Col xs="4" sm="3" className="column">
            <p style={{ display: "inline-block", fontSize: "20px" }}>
              Room No:
            </p>
          </Col>
          <Col xs="8" sm="6">
            <MDBInput
              value={room}
              id="typeText"
              style={{ backgroundColor: "white" }}
              type="text"
              onChange={(x) => {
                setRoom(x.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col align={"right"}>
            <StudentModal
              heading="Search"
              className="me-2 mt-3"
              data={studentDetails}
            />
          </Col>
        </Row>
      </div>
      <div className="card">
        <h2 align="center" className="mb-4">
          Hostel Count
        </h2>
        <Row align="center">
          <Col xs="4">
            <h3 style={{ display: "inline-block", fontSize: "20px" }}>
              Hostel
            </h3>
          </Col>
          <Col xs="4">
            <h3 style={{ display: "inline-block", fontSize: "20px" }}>
              Capacity
            </h3>
          </Col>
          <Col xs="4">
            <h3 style={{ display: "inline-block", fontSize: "20px" }}>
              Vacancy
            </h3>
          </Col>
        </Row>
        <Row align="center">
          <Col xs="4">
            <p style={{ display: "inline-block", fontSize: "20px" }}>
              A Hostel
            </p>
          </Col>
          <Col xs="4">
            <p style={{ display: "inline-block", fontSize: "20px" }}>100</p>
          </Col>
          <Col xs="4">
            <p style={{ display: "inline-block", fontSize: "20px" }}>10</p>
          </Col>
        </Row>
      </div>

      <div className="card">
        <h2 align="center" className="mb-4">
          Complaints
        </h2>
        <Row>
          <Col sm="6" className="my-2">
            <button
              className={
                type === "hostel"
                  ? "studentPageButton studentPageButtonactive"
                  : "studentPageButton"
              }
              onClick={() => {
                setType("hostel");
              }}
            >
              <strong>Hostel</strong>
            </button>
          </Col>

          <Col sm="6" className="my-2">
            <button
              className={
                type === "mess"
                  ? "studentPageButton studentPageButtonactive"
                  : "studentPageButton"
              }
              onClick={() => {
                setType("mess");
              }}
            >
              <strong>Mess</strong>
            </button>
          </Col>
        </Row>
        <Complaint></Complaint>
        <Row align="center">
          <Col xs="3" className="column">
            <p style={{ display: "inline-block", fontSize: "20px" }}>Floor :</p>
          </Col>
          <Col xs="3">
            <FormControl fullWidth>
              <Select
                style={{ height: "40px", backgroundColor: "white" }}
                displayEmpty
                value={floor}
                onChange={(x) => {
                  setFloor(x.target.value);
                }}
              >
                <MenuItem value={"1"}> 1</MenuItem>
                <MenuItem value={"2"}> 2</MenuItem>
                <MenuItem value={"3"}> 3</MenuItem>
                <MenuItem value={"4"}> 4</MenuItem>
                <MenuItem value={"5"}> 5</MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col xs="3" align={"right"}>
            <Button variant="dark" style={{ width: "75px" }}>
              Filter
            </Button>
          </Col>
        </Row>
      </div>
      <div className="card">
        <div>
          <center>
            <h3>Caretaker/Attendees Details</h3>
          </center>
          <div>
            <MDBTable scrollY>
              <MDBTableHead columns={staffDetails.columns} />
              <MDBTableBody rows={staffDetails.rows} className="text-center" />
            </MDBTable>
          </div>
        </div>
      </div>
      <div className="card">
        <div>
          <center>
            <h2>Archives</h2>
          </center>
          <div>
            <MDBTable scrollY>
              <MDBTableHead columns={archives.columns} />
              <MDBTableBody rows={archives.rows} className="text-center" />
            </MDBTable>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Warden;
