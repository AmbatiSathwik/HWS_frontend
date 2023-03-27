import React, { useState, useEffect } from "react";
import Base from "./Base";
import { Table } from "react-bootstrap";
import {
  hostelDetails,
  getHostelWardenByHostelId,
  getCareTakerByHostelId,
  getHostelSecretaryByHostelId,
} from "./helper/coreapicalls";
import { HostelCard, Facilities, GroupCards } from "./helper/HostelCard";
import "../styles.css";
import { useLocation, useParams } from "react-router-dom";
import CH from "../assets/images/chostel.jpg";
import Gallery from "./Gallery";
import { map } from "lodash";

const images = [
  {
    source: "../assets/images/chostel.jpg",
    alt: "C Hostel",
  },
  {
    source: "../assets/images/chostel.jpg",
    alt: "C Hostel",
  },
  {
    source: "../assets/images/chostel.jpg",
    alt: "C Hostel",
  },
  {
    source: "../assets/images/chostel.jpg",
    alt: "C Hostel",
  },
  {
    source: "../assets/images/chostel.jpg",
    alt: "C Hostel",
  },
  {
    source: "../assets/images/chostel.jpg",
    alt: "C Hostel",
  },
  {
    source: "../assets/images/chostel.jpg",
    alt: "C Hostel",
  },
  {
    source: "../assets/images/chostel.jpg",
    alt: "C Hostel",
  },
];

const hostelNameIdMap = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["D", 4],
  ["E", 5],
  ["F", 6],
  ["G", 7],
  ["PG1", 8],
  ["MHB", 9],
]);

function Hostel_name() {
  let { name } = useParams();
  name = name.toLocaleLowerCase() + "hostel";
  console.log(name, "🟥🟥🟥🟥🟥");
  return name;
}

function Hostels() {
  const details = hostelDetails().data;
  const name = Hostel_name();
  // from = details[name];
  // console.log(from, "🐣🐣🐣🐣");
  const hosteldetails = details[name];
  console.log(hosteldetails, "🥲🥲🥲");
  const [wardenname, setwardenname] = useState("Wardenname");
  const [phno, setphno] = useState("phno");
  const [caretakername, setcaretakername] = useState("cname");
  const [cphno, setcphno] = useState("cphno");
  const [hsname, sethsname] = useState("hsname");
  const [hsphno, sethsphno] = useState("hsphno");

  useEffect(() => {
    getHostelWardenByHostelId(1).then((data) => {
      setwardenname(data.data?.name);
      setphno(data.data?.phno);
    });
  });

  useEffect(() => {
    getCareTakerByHostelId(1).then((data) => {
      setcaretakername(data.data.name);
      setcphno(data.data?.phno);
    });
  });

  useEffect(() => {
    getHostelSecretaryByHostelId(1).then((data) => {
      sethsname(data.data.name);
      sethsphno(data.data?.phno);
    });
  });
  return (
    <Base title="">
      <div id="main" style={{ margin: "10px" }}>
        <center>
          <h1>{hosteldetails.name}</h1>
        </center>
        <HostelCard
          name={wardenname}
          phno={phno}
          image={hosteldetails.img}
          Hosteldetails={hosteldetails}
          type="2"
        />
      </div>

      <hr></hr>

      <div id="facilities" style={{ margin: "10px" }}>
        <Facilities
          hasFacility={true}
          facilityName="Basketball Court"
          description="This hostel has Basketball court"
          image={CH}
        />
      </div>

      <hr></hr>

      <div id="Administration" style={{ margin: "20px 10px 10px 10px" }}>
        <center>
          <h1>Administration</h1>
        </center>
        <GroupCards
          wname={wardenname}
          wphno={phno}
          cname={caretakername}
          cphno={cphno}
          hsname={hsname}
          hsphno={hsphno}
        />
      </div>

      <hr></hr>

      <div id="Archives" style={{ margin: "10px" }}>
        <center>
          <h1>Archives</h1>
        </center>
        <div className="card" style={{ backgroundColor: "#ECECEC" }}>
          <div className="archive-table">
            <Table
              responsive
              bordered
              hover
              style={{ border: "1px solid black" }}
            >
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Warden</th>
                  <th>Care Taker</th>
                  <th>Hostel Sec.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2022</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2020</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2019</td>
                  <td>Ram</td>
                  <td>Miriyala</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>2022</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2020</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2019</td>
                  <td>Ram</td>
                  <td>Miriyala</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>2022</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2020</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2019</td>
                  <td>Ram</td>
                  <td>Miriyala</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <hr></hr>

      <div id="Gallery">
        <center>
          <h1>Gallery</h1>
        </center>
        <Gallery images={images} />
      </div>
    </Base>
  );
}

export default Hostels;
