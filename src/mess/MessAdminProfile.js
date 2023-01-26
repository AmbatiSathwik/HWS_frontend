//import React from "react";
import Base from "../core/Base";
import Admin from "../assets/images/mess-admin.png";
import * as XLSX from "xlsx";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import mess_availability_update from "../assets/images/mess_availability_update.png";
import StarRatings from "react-star-ratings";
import { messreviesavg } from "./helper/messapicalls";

//mess-details-update, messadminarchives,messreviews, students details in mess

const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "long" });
};
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

  useEffect(() => {
    messreviesavg(1).then((data) => {
      console.log(data);
      setRate({
        ...rate,
        quality: data.data.quality,
        quantity: data.data.quantity,
        taste: data.data.taste,
        catering: data.data.catering,
        hygine: data.data.hyginess,
        puntuality: data.data.punctuality,
      });
    });
  }, []);

  return (
    <Base>
      <h2 align="center">MESS ADMIN DASHBOARD</h2>
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
                rating={rate.quality}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate.quality}</h4>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={4} align="right">
              <h4>Hygine: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={rate.hygine}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate.hygine}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={4} align="right">
              <h4>Taste: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={rate.taste}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate.taste}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={4} align="right">
              <h4>Quantity: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={rate.quantity}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate.quantity}</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={4} align="right">
              <h4>Catering: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={rate.catering}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate.catering}</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={4} align="right">
              <h4>Puntuality: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={rate.puntuality}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
            <Col align="left" xs={4}>
              <h4> {rate.puntuality}</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={4} align="right" >
              <h4>Overall: </h4>
            </Col>
            <Col xs={4} align="center" className="mess-admin-rating">
              <StarRatings
                rating={
                  (quality +
                    quantity +
                    taste +
                    catering +
                    hygine +
                    puntuality) /
                  6
                }
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
