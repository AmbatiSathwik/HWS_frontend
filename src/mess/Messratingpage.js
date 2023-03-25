import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import Table from "react-bootstrap/Table";
import "../styles.css";
import { FaStar } from "react-icons/fa";
import { getMessReviewByMessId } from "./helper/messapicalls";

let messIdMap = new Map([
  ["1", "Mess A"],
  ["2", "Mess B"],
  ["3", "Mess C"],
  ["4", "Mess D"],
  ["5", "Mess E"],
  ["6", "Mess F"],
  ["7", "Mess G"],
  ["8", "Mess IH"],
  ["9", "Mess MBH"],
  ["10", "Mess MBH2"],
  ["11", "Mess Lh"],
  ["12", "Mess MLH"],
]);

const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "long" });
};

function Messratingspage() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let i = 1;
    while (i <= 12) {
      getMessReviewByMessId(i, 2023, 3)
        .then((data) => {
          if (data != null) {
            data.data.MessName = messIdMap.get(data.data.id);
            setArr((state) => [...state, data.data]);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      i++;
    }
  }, []);

  const loadTableRatings = () => {
    return (
      <Table
        striped
        bordered
        hover
        responsive
        style={{
          textAlign: "center",
          backgroundColor: "white",
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "brown", color: "white" }}>
            <th style={{ textAlign: "center" }}>Sl No.</th>
            <th style={{ textAlign: "center" }}>Mess Name</th>
            <th style={{ textAlign: "center" }}>Taste</th>
            <th style={{ textAlign: "center" }}>Quality</th>
            <th style={{ textAlign: "center" }}>Quantity</th>
            <th style={{ textAlign: "center" }}>Catering</th>
            <th style={{ textAlign: "center" }}>Cleanliness and Hygiene</th>
            <th style={{ textAlign: "center" }}>Punctuality</th>
          </tr>
        </thead>
        {/* {arr.sort((a, b) => a.id.localeCompare(b.id))} */}
        {arr.map((x, index) => (
          <tbody key={x.id}>
            <tr style={{ textAlign: "center" }}>
              <td>{index + 1}</td>
              <td>{x.MessName ? x.MessName : messIdMap.get(x.id)}</td>
              <td>
                {x.taste ? x.taste : "NA"}
                <FaStar style={{ color: "gold" }} />
              </td>

              <td>
                {x.quality ? x.quality : "NA"}
                <FaStar style={{ color: "gold" }} />
              </td>
              <td>
                {x.quantity ? x.quantity : "NA"}
                <FaStar style={{ color: "gold" }} />
              </td>
              <td>
                {x.catering ? x.catering : "NA"}
                <FaStar style={{ color: "gold" }} />
              </td>
              <td>
                {x.hyginess ? x.hyginess : "NA"}
                <FaStar style={{ color: "gold" }} />
              </td>
              <td>
                {x.punctuality ? x.punctuality : "NA"}
                <FaStar style={{ color: "gold" }} />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    );
  };

  return (
    <Base title="">
      <div>
        <h1 className="m-3">
          {" "}
          <center>
            Mess Ratings
            <FaStar style={{ color: "gold" }} />
            <FaStar style={{ color: "gold" }} />
          </center>
        </h1>
        <br />
        <div className="">
          <center>
            Following scores are based on the feedback received from students
            and are out of 5<FaStar style={{ color: "gold" }} />.
          </center>
        </div>
        <div
          style={{ width: "100%", justifyContent: "center" }}
          className="px-5"
        >
          {loadTableRatings()}
        </div>
      </div>
    </Base>
  );
}

export default Messratingspage;
