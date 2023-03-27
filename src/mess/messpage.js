import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import {
  messadminDetails,
  getMessAdminByMessId,
  messreviesavg,
  getMessDetailsByMessId,
  getMessAvailabilityByMessId,
} from "./helper/messapicalls";
import Messdetails from "./messpagetemplate";
import { Col, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import "../styles.css";
import { useLocation } from "react-router-dom";
import CH from "../assets/images/chostel.jpg";
import Gallery from "../core/Gallery";
import { messDetails } from "../mess/helper/messapicalls";

const images = [
  {
    source: "../assets/images/ahostel1.jpg",
    alt: "A Hostel",
  },
  {
    source: "../assets/images/ahostel1.jpg",
    alt: "A Hostel",
  },
  {
    source: "../assets/images/ahostel1.jpg",
    alt: "A Hostel",
  },
  {
    source: "../assets/images/ahostel1.jpg",
    alt: "A Hostel",
  },
  {
    source: "../assets/images/ahostel1.jpg",
    alt: "A Hostel",
  },
  {
    source: "../assets/images/ahostel1.jpg",
    alt: "A Hostel",
  },
  {
    source: "../assets/images/ahostel1.jpg",
    alt: "A Hostel",
  },
  {
    source: "../assets/images/ahostel1.jpg",
    alt: "A Hostel",
  },
];

const data = {
  columns: [
    {
      label: "DAY",
      field: "id",
      sort: "asc",
    },
    {
      label: "BREAKFAST 7:00-9:30",
      field: "first",
      sort: "asc",
    },
    {
      label: "LUNCH 12:00-14:00",
      field: "second",
      sort: "asc",
    },
    {
      label: "TEA&SNACKS 16:00-17:30",
      field: "third",
      sort: "asc",
    },
    {
      label: "DINNER 19:00-21:00",
      field: "fourth",
      sort: "asc",
    },
  ],
  rows: [
    {
      id: "Monday",
      first: "Pulihora,Pickle,Bread,Jam,Tea,Milk",
      second: "Roti,Rice,Dal,Chapati,Chutney",
      third: "Onion Pakoda,Tea,Milk",
      fourth: "Roti,Rice,Dal,Chapati,Chutney",
    },
    {
      id: "Tuesday",
      first: "Pulihora,Pickle,Bread,Jam,Tea,Milk",
      second: "Roti,Rice,Dal,Chapati,Chutney",
      third: "Onion Pakoda,Tea,Milk",
      fourth: "Roti,Rice,Dal,Chapati,Chutney",
    },
    {
      id: "Wednesday",
      first: "Pulihora,Pickle,Bread,Jam,Tea,Milk",
      second: "Roti,Rice,Dal,Chapati,Chutney",
      third: "Onion Pakoda,Tea,Milk",
      fourth: "Roti,Rice,Dal,Chapati,Chutney",
    },
    {
      id: "Thursday",
      first: "Pulihora,Pickle,Bread,Jam,Tea,Milk",
      second: "Roti,Rice,Dal,Chapati,Chutney",
      third: "Onion Pakoda,Tea,Milk",
      fourth: "Roti,Rice,Dal,Chapati,Chutney",
    },
    {
      id: "Friday",
      first: "Pulihora,Pickle,Bread,Jam,Tea,Milk",
      second: "Roti,Rice,Dal,Chapati,Chutney",
      third: "Onion Pakoda,Tea,Milk",
      fourth: "Roti,Rice,Dal,Chapati,Chutney",
    },
    {
      id: "Saturday",
      first: "Pulihora,Pickle,Bread,Jam,Tea,Milk",
      second: "Roti,Rice,Dal,Chapati,Chutney",
      third: "Onion Pakoda,Tea,Milk",
      fourth: "Roti,Rice,Dal,Chapati,Chutney",
    },
    {
      id: "Sunday",
      first: "Pulihora,Pickle,Bread,Jam,Tea,Milk",
      second: "Roti,Rice,Dal,Chapati,Chutney",
      third: "Onion Pakoda,Tea,Milk",
      fourth: "Roti,Rice,Dal,Chapati,Chutney",
    },
  ],
};

function Messpages(name) {
  // const location = useLocation();
  // const { from, id } = location.state;

  //mess rating state variables
  const [boys, setboys] = useState(20);
  const [girls, setgirls] = useState(20);

  //mess details state vaiables
  const [messname, setmessname] = useState("Messname");
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

  const [mcdetails, setDetails] = useState({
    mcname: "",
    mcemail: "",
    mcphno: "",
    messId: "",
  });

  useEffect(() => {
    getMessAdminByMessId(id).then((data) => {
      console.log(data);
      setDetails({
        ...details,
        mcname: data.data.name,
        mcemail: data.data.email,
        mcphone: data.data.phno,
        messId: data.data.messId,
      });
      getMessDetailsByMessId(data.data.messId).then((data) => {
        setmessname(data.data.name);
        settotalstrength(data.data?.capacity);
        setboycapacity(data.data?.boyCapacity);
        setgirlcapacity(data.data?.girlCapacity);
      });
      getMessAvailabilityByMessId(data.data.messId).then((data) => {
        console.log(data?.data);
        setboys(data?.data?.boysCount);
        setgirls(data?.data?.girlsCount);
      });
    });
  }, []);

  useEffect(() => {
    messreviesavg(1).then((data) => {
      setRate({
        ...rate,
        quality: data.data?.quality,
        quantity: data.data.quantity,
        taste: data.data.taste,
        catering: data.data.catering,
        hygine: data.data.hyginess,
        puntuality: data.data.punctuality,
      });
    });
  }, []);

  const [item, setItem] = useState([]);

  const details = messDetails().data;

  let messdetails = details[name];
  return (
    <Base title="">
      <div id="main" style={{ margin: "10px" }}>
        <center>
          <h1>{name}</h1>
        </center>
        <Messdetails
          mcname={mcdetails.mcname}
          phno={mcdetails.mcphno}
          boysCount={boycapacity}
          girlsCount={girlcapacity}
          messDetails={messdetails}
          type="2"
        />
      </div>

      <div id="Archives" style={{ margin: "10px" }}>
        <center>
          <h1>MESS-MENU</h1>
        </center>
        <div className="card" style={{ backgroundColor: "#ECECEC" }}>
          <div>
            <MDBTable scrollY>
              <MDBTableHead columns={data.columns} />
              <MDBTableBody rows={data.rows} />
            </MDBTable>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 align="center">Mess Ratings</h3>
        <Row style={{ marginLeft: "100px", marginTop: "10px" }}>
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
                rating={rate?.taste || 0}
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
                rating={rate?.puntuality || 0}
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

      <div id="Gallery">
        <center>
          <h1>Gallery</h1>
        </center>
        <Gallery images={images} />
      </div>
    </Base>
  );
}

export default Messpages;
