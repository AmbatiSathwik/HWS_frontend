import React ,{ useState} from "react";
import Base from "../core/Base";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {messDetails} from "./helper/messapicalls";
import Messdetails from "./messpagetemplate";
import { Col, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import "../styles.css";
import {useLocation} from "react-router-dom";
import CH from "../assets/images/chostel.jpg";
import Gallery from "../core/Gallery"






const images = [
    {
        source : "../assets/images/ahostel1.jpg",
        alt : "A Hostel",
    },
    {
        source : "../assets/images/ahostel1.jpg",
        alt : "A Hostel",
    },
    {
        source : "../assets/images/ahostel1.jpg",
        alt : "A Hostel",
    },
    {
        source : "../assets/images/ahostel1.jpg",
        alt : "A Hostel",
    },
    {
        source : "../assets/images/ahostel1.jpg",
        alt : "A Hostel",
    },
    {
        source : "../assets/images/ahostel1.jpg",
        alt : "A Hostel",
    },
    {
        source : "../assets/images/ahostel1.jpg",
        alt : "A Hostel",
    },
    {
        source : "../assets/images/ahostel1.jpg",
        alt : "A Hostel",
    }
]

const data = {
    columns: [
      {
        label: 'DAY',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'BREAKFAST 7:00-9:30',
        field: 'first',
        sort: 'asc'
      },
      {
        label: 'LUNCH 12:00-14:00',
        field: 'second',
        sort: 'asc'
      },
      {
        label: 'TEA&SNACKS 16:00-17:30',
        field: 'third',
        sort: 'asc'
        },
      {
        label: 'DINNER 19:00-21:00',
        field: 'fourth',
        sort: 'asc'
        },

    ],
    rows: [
      {
        'id': 'Monday',
        'first': 'Pulihora,Pickle,Bread,Jam,Tea,Milk',
        'second': 'Roti,Rice,Dal,Chapati,Chutney',
        'third': 'Onion Pakoda,Tea,Milk',
        'fourth': 'Roti,Rice,Dal,Chapati,Chutney'
      },
      {
        'id': 'Tuesday',
        'first': 'Pulihora,Pickle,Bread,Jam,Tea,Milk',
        'second': 'Roti,Rice,Dal,Chapati,Chutney',
        'third': 'Onion Pakoda,Tea,Milk',
        'fourth': 'Roti,Rice,Dal,Chapati,Chutney'
      },
      {
        'id': 'Wednesday',
        'first': 'Pulihora,Pickle,Bread,Jam,Tea,Milk',
        'second': 'Roti,Rice,Dal,Chapati,Chutney',
        'third': 'Onion Pakoda,Tea,Milk',
        'fourth': 'Roti,Rice,Dal,Chapati,Chutney'
      },
      {
        'id': 'Thursday',
        'first': 'Pulihora,Pickle,Bread,Jam,Tea,Milk',
        'second': 'Roti,Rice,Dal,Chapati,Chutney',
        'third': 'Onion Pakoda,Tea,Milk',
        'fourth': 'Roti,Rice,Dal,Chapati,Chutney'
      },
      {
        'id': 'Friday',
        'first': 'Pulihora,Pickle,Bread,Jam,Tea,Milk',
        'second': 'Roti,Rice,Dal,Chapati,Chutney',
        'third': 'Onion Pakoda,Tea,Milk',
        'fourth': 'Roti,Rice,Dal,Chapati,Chutney'
      },
      {
        'id': 'Saturday',
        'first': 'Pulihora,Pickle,Bread,Jam,Tea,Milk',
        'second': 'Roti,Rice,Dal,Chapati,Chutney',
        'third': 'Onion Pakoda,Tea,Milk',
        'fourth': 'Roti,Rice,Dal,Chapati,Chutney'
      },
      {
        'id': 'Sunday',
        'first': 'Pulihora,Pickle,Bread,Jam,Tea,Milk',
        'second': 'Roti,Rice,Dal,Chapati,Chutney',
        'third': 'Onion Pakoda,Tea,Milk',
        'fourth': 'Roti,Rice,Dal,Chapati,Chutney'
      }
    ]
}

function Messpages(props) {
    //mess rating state variables

  const [quality, setquality] = useState(3);
  const [hyginity, sethyginity] = useState(4);
  const [responsiveness, setresponsiveness] = useState(2);
  const [quantity, setquantity] = useState(1.5);
  const [availability, setavailability] = useState(4.6);
  const [overall, setoverall] = useState(3.23);

  const [item, setItem] = useState([]);
    const details = messDetails().data;
    const location = useLocation();
    const {from} = location.state;
    return (
        <Base title="">
            <div id="main" style={{margin:"10px"}}>
                <center><h1>{from.name}</h1></center>
                <Messdetails name="" image={from.img}  messDetails = {from} type="2"/>
            </div>

           

            <div id="Archives" style={{margin:"10px"}}>
                <center><h1>MESS-MENU</h1></center>
                <div className="card" style={{backgroundColor:"#ECECEC"}}>
                    <div >
                    <MDBTable scrollY>
                        <MDBTableHead columns={data.columns} />
                        <MDBTableBody rows={data.rows} />
                    </MDBTable>
                    </div>
                </div>
            </div>
 
            <div className="card" style={{backgroundColor:"#ECECEC"}}>
        <h1 align="center">Mess Ratings</h1>
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
      

            <div id="Gallery">
                <center><h1>Gallery</h1></center>
                <Gallery images={images}/>
            </div>
        </Base>
    );
}

export default Messpages;