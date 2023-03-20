//import React from "react";
import Base from "../core/Base";
import Admin from "../assets/images/mess-admin.png";
import * as XLSX from "xlsx";
import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import mess_availability_update from "../assets/images/mess_availability_update.png";
import StarRatings from "react-star-ratings";
import {
  messadminDetails,
  messreviesavg,
  getMessDetailsByMessId,
  getMessAvailabilityByMessId,
  updateMessAvailability,
} from "./helper/messapicalls";

import {
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { Button } from "react-bootstrap";

//mess-details-update, messadminarchives,messreviews, students details in mess
import { registerStudentMess } from "../student/helper/studentapicalls";

const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "long" });
};
function MessAdminProfile() {
  const [boys, setboys] = useState(20);
  const [girls, setgirls] = useState(20);

  //mess details state vaiables
  const [messname, setmessname] = useState("");
  const [totalstrength, settotalstrength] = useState(0);
  const [boycapacity, setboycapacity] = useState(0);
  const [girlcapacity, setgirlcapacity] = useState(0);
  const [isveg, setisveg] = useState("Yes");
  //mess rating state variables

  const [rate, setRate] = useState({
    quality: 0,
    quantity: 0,
    taste: 0,
    catering: 0,
    hygine: 0,
    puntuality: 0,
  });

  const { quality, quantity, taste, catering, hygine, puntuality } = rate;

  const [item, setItem] = useState([]);
  // useEffect (()=>{

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((data) => {
      setItem(data);
    });
  };
  // },[])

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phno: "",
    messId: "",
  });

  useEffect(() => {
    messadminDetails().then((data) => {
      setDetails({
        ...details,
        name: data.data.name,
        email: data.data.email,
        phno: data.data.phno,
        messId: data.data.messId,
      });
      getMessDetailsByMessId(data.data.messId).then((data) => {
        setmessname(data.data.name);
        settotalstrength(data.data?.capacity);
        setboycapacity(data.data?.boyCapacity);
        setgirlcapacity(data.data?.girlCapacity);
        setisveg(data.data.isVeg);
      });
      getMessAvailabilityByMessId(data.data.messId).then((data) => {
        console.log(data?.data);
        setboys(data?.data?.boysCount);
        setgirls(data?.data?.girlsCount);
        setboycapacity(data?.data?.boysCapacity - data.data?.boysCount);
        setgirlcapacity(data?.data?.girlsCapacity - data.data?.girlsCount);
      });
    });
  }, []);

  useEffect(() => {
    messreviesavg(1).then((data) => {
      setRate({
        ...rate,
        quality: data.data.quality === null ? 0 : data.data.quality,
        quantity: data.data.quantity === null ? 0 : data.data.quantity,
        taste: data.data.taste === null ? 0 : data.data.taste,
        catering: data.data.catering === null ? 0 : data.data.catering,
        hygine: data.data.hyginess === null ? 0 : data.data.hyginess,
        puntuality: data.data.punctuality === null ? 0 : data.data.punctuality,
      });
    });
  }, []);

  const [messUserdetails, setMessUserDetails] = useState({
    studentId: "",
    month: "",
    year: "",
    messId: "",
  });

  const { studentId, month, year, messId } = messUserdetails;

  const handleChange = (name) => (event) => {
    setMessUserDetails({
      ...messUserdetails,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(messUserdetails);
    registerStudentMess(messUserdetails)
      .then((data) => {
        if (data.err) {
          console.log(data.err);
          alert(data.err);
        } else {
          alert("success");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Base>
      <h2 align="center">MESS ADMIN DASHBOARD</h2>
      <div className="card">
        <Row>
          <Col xs={6}>
            <img src={Admin} width="100%" alt="admin-logo" />
          </Col>
          <Col xs={6}>
            <h5>{details.name}</h5>
          </Col>
        </Row>
      </div>
      <div className="card">
        <h3 align="center">Mess Ratings</h3>
        <Row style={{ marginLeft: "100px", marginTop: "10px" }}>
          <div>
            <Row>
              <Col align="right">
                <strong>Month, Year:</strong>
              </Col>
              <Col align="left">{getMonthName(1)}, 2023 /* change this */</Col>
            </Row>
          </div>
          <Row>
            <Col xs={4} align="right">
              <h4>Quality: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={rate?.quality || 0}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate?.hygine || 0}</h4>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={4} align="right">
              <h4>Hygine: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={0}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {0}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={4} align="right">
              <h4>Taste: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={0}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate?.taste || 0}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={4} align="right">
              <h4>Quantity: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={0}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate?.quantity || 0}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={4} align="right">
              <h4>Catering: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={0}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate?.catering || 0}</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={4} align="right">
              <h4>Puntuality: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={0}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate?.puntuality || 0}</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={4} align="right">
              <h4>Overall: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={0}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4>
                {" "}
                {(
                  (quality +
                    quantity +
                    taste +
                    catering +
                    hygine +
                    puntuality) /
                  6
                ).toFixed(2)}
              </h4>
            </Col>
          </Row>
        </Row>
      </div>
      <div className="card">
        <h3 align="center">Mess Details</h3>
        <Row style={{ marginLeft: "100px", marginTop: "10px" }}>
          <Col xs={6}>
            <h4>Name: {messname}</h4>
            <h4>Total Strength: {totalstrength}</h4>
            <h4>Boy Capacity: {boycapacity}</h4>
            <h4>Girl Capacity: {girlcapacity}</h4>
            <h4>Is Veg: {{ isveg } ? "YES" : "NO"}</h4>
          </Col>

          <Col xs={5}>
            <img src={Admin} width="100%" alt="admin-logo" />
          </Col>
        </Row>
      </div>

      <div className="card">
        <h3 align="center">Student Details</h3>
        <div
          className="card-body"
          style={{ overflowY: "scroll", maxHeight: "500px" }}
        >
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
          ></input>
          <table className="table container">
            <thead>
              <tr>
                <th scope="col">MESS</th>
                <th scope="col">STUDENTNAME</th>
                <th scope="col">ROLLNO</th>
                <th scope="col">DUES</th>
              </tr>
            </thead>
            <tbody>
              {item &&
                item.map((data) => {
                  return (
                    <tr key={data.items}>
                      <th scope="row">{data.MESS}</th>
                      <td>{data.STUDENTNAME}</td>
                      <td>{data.ROLLNO}</td>
                      <td>{data.DUES}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <center>
            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "10px 20px",
                fontSize: "15px",
                borderRadius: "10px",
              }}
            >
              Download
            </button>
          </center>
        </div>
      </div>

      <div className="card">
        <h3 align="center">Update Mess Details</h3>

        <Row>
          <Col xs={6}>
            <img
              src={mess_availability_update}
              style={{ marginLeft: "30px" }}
              width="70%"
              alt="admin-logo"
            />
          </Col>
          <Col xs={6}>
            <form>
              <div className="form-group">
                <p>
                  <strong>Boys Count:</strong> {boys}
                </p>
                <p>
                  <strong>Girls Count:</strong> {girls}
                </p>
                <label>
                  <strong>Boysavailabality:</strong>
                </label>
                <input
                  style={{ marginLeft: "8px" }}
                  value={boycapacity}
                  type="number"
                  onChange={(x) => {
                    setboycapacity(Number(x.target.value));
                  }}
                ></input>
                <br></br>
                <label>
                  <strong>Girlsavailability:</strong>
                </label>
                <input
                  style={{ marginLeft: "14px", marginTop: "4px" }}
                  value={girlcapacity}
                  type="number"
                  onChange={(x) => {
                    setgirlcapacity(Number(x.target.value));
                  }}
                ></input>
                <button
                  style={{
                    borderRadius: "6px",
                    border: "1px solid",
                    color: "white",
                    marginLeft: "300px",
                    transform: "scale(0.6)",
                    backgroundColor: "black",
                    padding: "8px 16px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(girlcapacity);
                    console.log(girls);
                    updateMessAvailability({
                      girlCapacity: girls + girlcapacity,
                      boyCapacity: boys + boycapacity,
                      messId: details.messId,
                    });
                  }}
                >
                  Update Avaiability
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
      <div className="card">
        <h3 align="center">Add student to Mess</h3>
        <div>
          <FormControl variant="outlined" className="mb-4 w-100">
            <OutlinedInput
              style={{ borderRadius: "8px", height: "50px" }}
              value={studentId}
              onChange={handleChange("studentId")}
              placeholder="Name"
            />
            <p>studentId</p>
          </FormControl>
          <FormControl variant="outlined" className="mb-4 w-100">
            <OutlinedInput
              style={{ borderRadius: "8px", height: "50px" }}
              value={month}
              onChange={handleChange("month")}
              placeholder="Rollno"
            />
            <p>month</p>
          </FormControl>
          <FormControl variant="outlined" className="mb-4 w-100">
            <OutlinedInput
              style={{ borderRadius: "8px", height: "50px" }}
              value={year}
              onChange={handleChange("year")}
              placeholder="Mess name"
            />
            <p>year</p>
          </FormControl>
          <FormControl variant="outlined" className="mb-4 w-100">
            <OutlinedInput
              style={{ borderRadius: "8px", height: "50px" }}
              value={messId}
              onChange={handleChange("messId")}
              placeholder="Wrtite your complaint here"
            />
            <p>messId</p>
          </FormControl>
          <Button
            className="mb-4 px-5 w-100"
            onClick={onSubmit}
            color="info"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </div>
    </Base>
  );
}

export default MessAdminProfile;
