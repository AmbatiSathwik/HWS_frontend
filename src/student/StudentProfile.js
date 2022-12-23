import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Base from "../core/Base";
import LG1 from "../assets/images/studentintro.png";
import { Rating } from "react-simple-star-rating";
import {
  studentDetails,
  studentMessDetails,
  getMessName,
} from "./helper/studentapicalls";

//details, mess registration, mess card details with download, mess dues,
function StudentProfile() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    rollno: "",
    dob: "",
    phno: "",
    address: "",
  });

  const [messdetails, setMessDetails] = useState({
    month: 10,
    year: 2022,
    messId: 2,
    messName: "sadsdas",
    isAvailable: false,
  });

  const [rating, setRating] = useState({
    quality: 0,
    quantity: 0,
    taste: 0,
    catering: 0,
    hygine: 0,
    puntuality: 0,
  });

  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", { month: "long" });
  };

  const date = new Date();

  useEffect(() => {
    studentDetails().then((data) => {
      if (data.err) {
        console.log(data.err);
      } else {
        setDetails({
          ...details,
          name: data.data.name,
          email: data.data.email,
          rollno: data.data.rollno,
          dob: data.data.dob,
          phno: data.data.phno,
          address: data.data.address,
        });
      }
    });
    // studentMessDetails().then((data) => {
    //   if (data.err) {
    //     setMessDetails({ ...messdetails, isAvailable: false });
    //   } else {
    //     setMessDetails({
    //       ...messdetails,
    //       year: data.data.year,
    //       month: data.data.month,
    //       messId: data.data.messId,
    //       isAvailable: true,
    //     });
    //   }
    // });
    // if (messdetails.messId) {
    //   getMessName(messdetails.messId)
    //     .then((data) => {
    //       setMessDetails({ ...messdetails, messName: data.data.name });
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
  }, []);

  let degree =
    details.rollno[0] === "b"
      ? "B.Tech"
      : details.rollno[0] === "m"
      ? "M.Tech"
      : "Ph.D";

  const msg = () => {
    if (messdetails.isAvailable) {
      return (
        <>
          <h3>Hi {details.name},</h3>
          <br />
          <h4>
            You are allocated a {messdetails.messName || "No mess"} for the
            month of {getMonthName(date.getMonth() + 1)}. Collect your mess card
            here.
          </h4>
          <br />
          <a className="btn btn-primary" href="#messcard">
            Mess Card
          </a>
        </>
      );
    } else {
      return (
        <>
          <h3>Hi {details.name},</h3>
          <br />
          <h4>
            You are not allocated a mess for the month of{" "}
            {getMonthName(date.getMonth() + 1)}. If you didn't payed the fees.
            Please do pay and register for mess here.
          </h4>
          <br />
          <a className="btn btn-primary" href="#messregistration">
            Register Mess
          </a>
        </>
      );
    }
  };

  const onRatingClick = (name) => (rate) => {
    setRating({ ...rating, [name]: rate });
  };

  useEffect(()=>{
    console.log(rating)
  },[rating])

  const showRating = () => {
    if (messdetails.isAvailable) {
      return (
        <strong>
          <p align="center">
            You didn't took the mess for the month of{" "}
            {getMonthName(date.getMonth() + 1)}, So you are unable to rate mess
            for this month.{" "}
          </p>
        </strong>
      );
    } else {
      return (
        <>
          <Row>
            <Col align="right">
              <strong>Mess Name:</strong>
            </Col>
            <Col align="left">{messdetails.messName}</Col>
          </Row>
          <br />
          <Row>
            <Col align="right">
              <strong>Month, Year:</strong>
            </Col>
            <Col align="left">
              {getMonthName(messdetails.month)}, {messdetails.year}
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="right" className="my-1">
              <strong>Quality:</strong>
            </Col>
            <Col align="left">
              <Rating onClick={onRatingClick("quality")} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="right" className="my-1">
              <strong>Quantity:</strong>
            </Col>
            <Col align="left">
              <Rating onClick={onRatingClick("quantity")} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="right" className="my-1">
              <strong>Taste:</strong>
            </Col>
            <Col align="left">
              <Rating onClick={onRatingClick("taste")} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="right" className="my-1">
              <strong>Catering:</strong>
            </Col>
            <Col align="left">
              <Rating onClick={onRatingClick("catering")} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="right" className="my-1">
              <strong>hygine:</strong>
            </Col>
            <Col align="left">
              <Rating onClick={onRatingClick("hygine")} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="right" className="my-1">
              <strong>Puntuality:</strong>
            </Col>
            <Col align="left">
              <Rating onClick={onRatingClick("puntuality")} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="center"><Button>Submit</Button></Col>
          </Row>
          
        </>
      );
    }
  };

  const ratingAvailable = date.getDate() > 25 ? true : false;

  return (
    <Base title="STUDENT DASHBOARD">
      <div id="studentintro" className="p-4 mt-2">
        <Row>
          <Col align="center" className="studentintroimg">
            <img src={LG1} alt="student image" width="80%" height="100%" />
          </Col>
          <Col>
            <div className="studentintrotex">{msg()}</div>
          </Col>
        </Row>
      </div>

      <div id="profile" className="p-4">
        <h3 align="center">Student Details</h3>
        <br />
        <Row>
          <Col align="center">
            <strong>
              <label>Roll Number</label>
            </strong>
            <div>{details.rollno.toUpperCase()}</div>
          </Col>
          <Col align="center">
            <strong>
              <label>Name</label>
            </strong>
            <div>{details.name}</div>
          </Col>
          <Col align="center">
            <strong>
              {" "}
              <label>Degree</label>
            </strong>
            <div>{degree}</div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align="center">
            <strong>
              <label>Email</label>
            </strong>
            <div>{details.email}</div>
          </Col>
          <Col align="center">
            <strong>
              <label>Date of Birth</label>
            </strong>
            <div>{details.dob.split("-").reverse().join("-")}</div>
          </Col>
          <Col align="center">
            <strong>
              <label>Phone Number</label>
            </strong>
            <div>{details.phno}</div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align="center">
            <strong>
              {" "}
              <label>Address</label>
            </strong>
            <div>{details.address}</div>
          </Col>
          <Col align="center">
            <strong>
              <label>Hostel Name</label>
            </strong>
            <div></div>
          </Col>
          <Col align="center">
            <strong>
              <label>Room Number</label>
            </strong>
            <div></div>
          </Col>
        </Row>
      </div>
      <br />

      <div id="messrating" className="p-4">
        <h3 align="center">Mess Rating</h3>
        <br />
        {showRating()}
      </div>
    </Base>
  );
}

export default StudentProfile;
