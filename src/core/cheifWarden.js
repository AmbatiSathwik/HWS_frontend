import { React, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import { FormControl, MenuItem, Select,InputLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Base from "./Base";
import StudentsList from "./studentsByHostel";

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

let staffDetails = {
  columns: ["Hostel", "Name", "Position", "Phone"],
  rows: [
    { hostel: "A", name: "Jon", pos: "Warden", phone: "999999999" },
    { hostel: "B", name: "Abcde", pos: "Caretaker", phone: "999999999" },
    { hostel: "C", name: "Efijkl", pos: "Warden", phone: "999999999" },
  ],
};

const mess = {
  columns: ["Mess Name", "Vacancy", "Capacity", "Mess In-charge", "Phone"],
  rows: [
    { first: "Mess A", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess B", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess C", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess D", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess E", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess F", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess G", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess IH", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess MBH", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess MBH2", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess Lh", second: 100, third: 0, fourth: 0, fifth: 0 },
    { first: "Mess MLH", second: 100, third: 0, fourth: 0, fifth: 0 },
  ],
};
const data = {
  columns: ["Hostel", "Vacancy", "Capacity"],
  rows: [
    { first: "A", second: "0", third: "100" },
    { first: "B", second: "0", third: "100" },
    { first: "C", second: "0", third: "100" },
    { first: "MLH", second: "0", third: "100" },
    { first: "LH", second: "0", third: "100" },
    { first: "E", second: "0", third: "100" },
  ],
};

const archives = {
  columns: ["Year", "Name of the Chief Warden"],
  rows: [
    { first: "2019-2020", second: "Mr. Rajesh" },
    { first: "2018-2019", second: "Mr. Ramesh" },
    { first: "2017-2018", second: "Mr. Karthik" },
  ],
};

const achievements = {
  columns: ["Year", "Achievement"],
  rows: [
    {
      first: "2019",
      second: (
        <a href="https://google.com" style={{ textDecoration: "none" }}>
          Achievement 1
        </a>
      ),
    },
    {
      first: "2018",
      second: (
        <a href="https://google.com" style={{ textDecoration: "none" }}>
          Achievement 2
        </a>
      ),
    },
    {
      first: "2017",
      second: (
        <a href="https://google.com" style={{ textDecoration: "none" }}>
          Achievement 3
        </a>
      ),
    },
  ],
};
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
function Cheifwarden() {
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

  //search section
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState({});
  const [type, setType] = useState("hostel");
  const [hostel, setHostel] = useState("");

  function StudentModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState(studentDetails);
    return (
      <>
        <Button variant="dark" size={"lg"} onClick={handleShow} className="mt-2">
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
  //function to show anountmous complaints
  function AnonymousComplaints() {
    const [data, setData] = useState(arr);
    return (
      <div>
        <Row align="center">
          <Col xs="3" className="d-none d-md-block">
            <h3 style={{ display: "inline-block", fontSize: "25px" }}>Date</h3>
          </Col>
          <Col xs="3"></Col>
          <Col xs="12" md="6">
            <h3 style={{ display: "inline-block", fontSize: "25px" }}>Title</h3>
          </Col>
        </Row>
        <div
          style={{ height: "200px", overflowX: "hidden", overflowY: "auto" }}
        >
          {data.map((x) => {
            return (
              <Row align="center">
                <Col xs="3" className="d-none d-md-block">
                  <p style={{ display: "inline-block", fontSize: "16px" }}>
                    {x.date}
                  </p>
                </Col>
                <Col xs="3"></Col>
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
  //function to show the details of the student based on the hostel
  const navigate = useNavigate();
  return (
    <Base title="Chief Warden" detail="chiefWarden">
      <h1 className="mt-4 mb-2">
        <center>CHIEF WARDEN</center>
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
              placeholder="Enter Name/ID of the student"
            />
          </Col>
        </Row>
        <Row>
          <Col align={"center"}>
            <StudentModal

              heading="Search"
              className="me-2 mt-3"
              data={studentDetails}
            />
          </Col>
        </Row>
      </div>
      <div className="card">
        <center>
          <h2>Students by hostel</h2>
        </center>
        <div>
          <Row>
            <Col xs="4" sm="3" className="column">
              <p style={{ display: "inline-block", fontSize: "20px" }}>
                Hostel:
              </p>
            </Col>
            <Col xs="8" sm="6">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Hostel</InputLabel>
                <Select
                  style={{ height: "40px", backgroundColor: "white" }}
                  displayEmpty
                  value={hostel}
                  onChange={(x) => {
                    setHostel(x.target.value);
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
            <Col align={"center"}>
              <Link to="/studentsList" state={{ from: hostel }}>
                <Button
                  variant="dark"
                  value={hostel}
                  size={"lg"}
                  className="me-2 mt-3"
                  onClick={() => {
                    console.log(hostel);
                  }}
                >
                  Search
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <div className="card">
        <h2 align="center" className="mb-4">
          Complaints
        </h2>
        <Row>
          <Col sm="4" className="my-2">
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

          <Col sm="4" className="my-2">
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

          <Col sm="4" className="my-2">
            <button
              className={
                type === "anonymus"
                  ? "studentPageButton studentPageButtonactive"
                  : "studentPageButton"
              }
              onClick={() => {
                setType("anonymus");
              }}
            >
              <strong>Anonymus</strong>
            </button>
          </Col>
        </Row>

        {type === "hostel" || type === "mess" ? (
          <Complaint></Complaint>
        ) : (
          <AnonymousComplaints></AnonymousComplaints>
        )}
      </div>
      <div className="card">
        <div>
          <center>
            <h3>Hostel Staff Details</h3>
          </center>
          <div>
            <Table striped bordered hover responsive style={{textAlign:"center"}}>
                <thead>
                    <tr style={{backgroundColor:"#3E54AC", color:"white", fontSize:"1.5rem"}}>
                      {staffDetails.columns.map((x) => {
                        return <th style={{textAlign:"center", verticalAlign:"middle"}}>{x}</th>;
                      })}
                    </tr>
                </thead>
                <tbody>
                {staffDetails.rows.map((x) => {
                    return (
                        <tr>
                            <td>{x.name}</td>
                            <td>{x.name}</td>
                            <td>{x.pos}</td>
                            <td>{x.phone}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className="card">
        <center>
          <h2>Hostel Count</h2>
        </center>
        <div>
          <Table striped bordered hover responsive style={{textAlign:"center"}}>
                <thead>
                    <tr style={{backgroundColor:"#3E54AC", color:"white", fontSize:"1.5rem"}}>
                        {data.columns.map((x) => {
                            return <th style={{textAlign:"center", verticalAlign:"middle"}}>{x}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                {data.rows.map((x) => {
                    return (
                        <tr>
                            <td>{x.first}</td>
                            <td>{x.second}</td>
                            <td>{x.third}</td>
                        </tr>
                    );
                })}
                </tbody>
          </Table>
        </div>
      </div>
      <div className="card">
        <center>
          <h2>Mess Count</h2>
        </center>
        <div>
          <Table striped bordered hover responsive style={{textAlign:"center"}}>
            <thead>
            <tr style={{backgroundColor:"#3E54AC", color:"white", fontSize:"1.5rem"}}>
              {mess.columns.map((x) => {
                return <th style={{textAlign:"center", verticalAlign:"middle"}}>{x}</th>;
              })}
            </tr>
            </thead>
            <tbody>
            {mess.rows.map((x) => {
                return (
                    <tr>
                      <td>{x.first}</td>
                      <td>{x.second}</td>
                      <td>{x.third}</td>
                      <td>{x.fourth}</td>
                      <td>{x.fifth}</td>
                    </tr>
                );
            })}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="card">
        <div>
          <center>
            <h2>Archives</h2>
          </center>
          <div>
            <Table striped bordered hover responsive style={{textAlign:"center"}}>
                <thead>
                    <tr style={{backgroundColor:"#3E54AC", color:"white", fontSize:"1.5rem"}}>
                        {archives.columns.map((x) => {
                            return <th style={{textAlign:"center", verticalAlign:"middle"}}>{x}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                {archives.rows.map((x) => {
                    return (
                        <tr>
                            <td>{x.first}</td>
                            <td>{x.second}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
          </div>
        </div>
      </div>

      <div className="card">
        <center>
          <h2 >Achievements</h2>
        </center>
        <div>
          <Table striped bordered hover responsive style={{textAlign:"center"}}>
                <thead>
                    <tr style={{backgroundColor:"#3E54AC", color:"white", fontSize:"1.5rem"}}>
                        {achievements.columns.map((x) => {
                            return <th style={{textAlign:"center", verticalAlign:"middle"}}>{x}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                {achievements.rows.map((x) => {
                    return (
                        <tr>
                            <td>{x.first}</td>
                            <td>{x.second}</td>
                        </tr>
                    );
                })}
                </tbody>
          </Table>
        </div>
      </div>
    </Base>
  );
}

export default Cheifwarden;
