import React, { useState } from "react";
import Base from "../core/Base";
import Admin from "../assets/images/mess-admin.png";
import mess_availability_update from "../assets/images/mess_availability_update.png";
import { Col, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";

//mess-details-update, messadminarchives,messreviews, students details in mess
function MessAdminProfile() {
  const [boys,setboys]=useState(200);
  const [girls,setgirls]=useState(200);
  const [boys1,setboys1]=useState(0);
  const [girls1,setgirls1]=useState(0);

  //mess details state vaiables
  const [messname,setmessname]=useState("A");
  const [totalstrength,settotalstrength]=useState(400);
  const [boycapacity,setboycapacity]=useState(200);
  const [girlcapacity,setgirlcapacity]=useState(200);
  const [isveg,setisveg]=useState("Yes");
  //mess rating state variables
  const [quality,setquality]=useState(3);
  const [hyginity,sethyginity]=useState(4);
  const [responsiveness,setresponsiveness]=useState(2);
  const [quantity,setquantity]=useState(1);
  const [availability,setavailability]=useState(4);
  const [overall,setoverall]=useState(3);

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
        <Row style={{marginLeft:"100px",marginTop:"10px"}}>
        <Row >
          <Col xs={3}>
          <h3>Quality: </h3>
          </Col>
          <Col xs={4}>
          <StarRatings
          rating={quality}
          starRatedColor="blue"
          numberOfStars={5}
          starDimension="40px"
          name='rating'
          />
          </Col>
        </Row>
        <Row >
          <Col xs={3}>
          <h3>Hyginity: </h3>
          </Col>
          <Col xs={4}>
          <StarRatings
          rating={hyginity}
          starRatedColor="blue"
          numberOfStars={5}
          starDimension="40px"
          name='rating'
          />
          </Col>
        </Row>

        <Row >
          <Col xs={3}>
          <h3>Responsiveness: </h3>
          </Col>
          <Col xs={4}>
          <StarRatings
          rating={responsiveness}
          starRatedColor="blue"
          numberOfStars={5}
          starDimension="40px"
          name='rating'
          />
          </Col>
        </Row>

        <Row >
          <Col xs={3}>
          <h3>Quantity: </h3>
          </Col>
          <Col xs={4}>
          <StarRatings
          rating={quantity}
          starRatedColor="blue"
          numberOfStars={5}
          starDimension="40px"
          name='rating'
          />
          </Col>
        </Row>

        <Row >
          <Col xs={3}>
          <h3>Availability: </h3>
          </Col>
          <Col xs={4}>
          <StarRatings
          rating={availability}
          starRatedColor="blue"
          numberOfStars={5}
          starDimension="40px"
          name='rating'
          />
          </Col>
        </Row>
        <Row >
          <Col xs={3}>
          <h3>Overall: </h3>
          </Col>
          <Col xs={4}>
          <StarRatings
          rating={overall}
          starRatedColor="blue"
          numberOfStars={5}
          starDimension="40px"
          name='rating'
          />
          </Col>
        </Row>
        </Row>
      </div>


      <div className="card">
        <h3 align="center">Mess Details</h3>
        <Row style={{marginLeft:"100px",marginTop:"10px"}}>
        <Col xs={6}>
          <h3>Name: {messname}</h3>
          <h3>Total Strength: {totalstrength}</h3>
          <h3>Boy Capacity: {boycapacity}</h3>
          <h3>Girl Capacity: {girlcapacity}</h3>
          <h3>Is Veg: {isveg}</h3>
          
        </Col>
        
          <Col xs={5}>
          
                      <img src={Admin} width="100%" alt="admin-logo" />
        
          </Col>
        </Row>
      </div>



      <div className="card">
        <h3 align="center">Student Details</h3>
        
      </div>
      <div className="card">
        <h3 align="center"><strong>Mess Availability</strong></h3>
        <Row>
          <Col xs={6}>
            <img src={mess_availability_update} width="100%" alt="admin-logo" />
          </Col>
          <Col xs={6}>
              <form>
                <div className="form-group">
                  <label >Girl Count:</label>
                  <input value={girls1} onChange={(x)=>{setgirls1(x.target.value)
                    console.log(girls1)
                  }}></input>
                  <br></br>
                  <label >Boy Count:</label>
                  <input  value={boys1} onChange={(x)=>{setboys1(x.target.value)}}></input>
                  <p>boysavailabality: {boys-girls1+Number(boys1)}</p>
                  <p>girlsavaliavilty: {girls-boys1+Number(girls1)}</p>
                  <button>Update</button>
                  </div>
              </form>
          </Col>
        </Row>
      </div>
    </Base>
  );
}

export default MessAdminProfile;
