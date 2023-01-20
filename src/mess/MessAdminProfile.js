//import React from "react";
import Base from "../core/Base";
import Admin from "../assets/images/mess-admin.png";
import * as XLSX from "xlsx";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import mess_availability_update from "../assets/images/mess_availability_update.png";
import StarRatings from "react-star-ratings";

//mess-details-update, messadminarchives,messreviews, students details in mess
function MessAdminProfile() {
  const [boys, setboys] = useState(20);
  const [girls, setgirls] = useState(20);
  const [total, settotal] = useState(40);
  //mess details state vaiables
  const [messname, setmessname] = useState("A");
  const [totalstrength, settotalstrength] = useState(400);
  const [boycapacity, setboycapacity] = useState(200);
  const [girlcapacity, setgirlcapacity] = useState(200);
  const [isveg, setisveg] = useState("Yes");
  //mess rating state variables
  const [quality, setquality] = useState(3);
  const [hyginity, sethyginity] = useState(4);
  const [responsiveness, setresponsiveness] = useState(2);
  const [quantity, setquantity] = useState(1.5);
  const [availability, setavailability] = useState(4.6);
  const [overall, setoverall] = useState(3.23);

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
        <Row style={{ marginLeft: "100px", marginTop: "10px" }}>
          <Row>
            <Col xs={3}>
              <h4>Quality: </h4>
            </Col>
            <Col xs={4}>
              <StarRatings
                rating={quality}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={2}>
              <h4> {quality}</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <h4>Hyginity: </h4>
            </Col>
            <Col xs={4}>
              <StarRatings
                rating={hyginity}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={2}>
              <h4> {hyginity}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={3}>
              <h4>Responsiveness: </h4>
            </Col>
            <Col xs={4}>
              <StarRatings
                rating={responsiveness}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={2}>
              <h4> {responsiveness}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={3}>
              <h4>Quantity: </h4>
            </Col>
            <Col xs={4}>
              <StarRatings
                rating={quantity}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={2}>
              <h4> {quantity}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={3}>
              <h4>Availability: </h4>
            </Col>
            <Col xs={4}>
              <StarRatings
                rating={availability}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={2}>
              <h4> {availability}</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <h4>Overall: </h4>
            </Col>
            <Col xs={4}>
              <StarRatings
                rating={overall}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={2}>
              <h4> {overall}</h4>
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
            <h4>Is Veg: {isveg}</h4>
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
                  <strong>Boys Count:</strong> 200
                </p>
                <p>
                  <strong>Girls Count:</strong> 200
                </p>
                <label>
                  <strong>Boysavailabality:</strong>
                </label>
                <input
                  style={{ marginLeft: "8px" }}
                  value={boys}
                  onChange={(x) => {
                    setboys(x.target.value);
                    setgirls(total - x.target.value);
                  }}
                ></input>
                <br></br>
                <label>
                  <strong>Girlsavailability:</strong>
                </label>
                <input
                  style={{ marginLeft: "14px", marginTop: "4px" }}
                  value={girls}
                  onChange={(x) => {
                    setgirls(x.target.value);
                    setboys(total - x.target.value);
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
                >
                  Update Avaiability
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Base>
  );
}

export default MessAdminProfile;
