import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Base from "./Base";
import "../styles.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const students = {
  columns: [
    { label: "S.No", field: "sno", sort: "asc" },
    { label: "Name", field: "name", sort: "asc" },
    { label: "Roll No", field: "rollno", sort: "asc" },
      { label: "Room No", field: "roomno", sort: "asc"},
    { label: "Department", field: "dept", sort: "asc" },
  ],
  rows: [
    { sno: "1", name: "John Doe", rollno: "B190012CS",roomNo:212, dept: "CSE" },
    { sno: "2", name: "John Doe", rollno: "B190012CS",roomNo:112, dept: "ECE" },
    { sno: "3", name: "John Doe", rollno: "B190012CS",roomNo:403, dept: "EEE" },
    { sno: "4", name: "John Doe", rollno: "B190012CS",roomNo:103, dept: "CSE" },
    { sno: "5", name: "John Doe", rollno: "B190012CS",roomNo:212, dept: "ECE" },
    { sno: "6", name: "John Doe", rollno: "B190012CS",roomNo:133, dept: "CSE" },
    { sno: "7", name: "John Doe", rollno: "B190012CS",roomNo:212, dept: "EEE" },
    { sno: "8", name: "John Doe", rollno: "B190012CS",roomNo:203, dept: "EEE" },
    { sno: "9", name: "John Doe", rollno: "B190012CS",roomNo:403, dept: "CSE" },
    { sno: "10", name: "John Doe", rollno: "B190012CS",roomNo:421, dept: "ECE" },
    { sno: "11", name: "John Doe", rollno: "B190012CS",roomNo:212, dept: "EEE" },
    { sno: "12", name: "John Doe", rollno: "B190012CS",roomNo:413, dept: "CSE" },
    { sno: "13", name: "John Doe", rollno: "B190012CS",roomNo:403, dept: "ECE" },
    { sno: "14", name: "John Doe", rollno: "B190012CS",roomNo:303, dept: "EEE" },
    { sno: "15", name: "John Doe", rollno: "B190012CS",roomNo:212, dept: "CSE" },
    { sno: "16", name: "John Doe", rollno: "B190012CS",roomNo:124, dept: "ECE" },
  ],
};
function StudentsList() {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  return (
    <Base title="StudentsList">
      <h1 className="mt-3 mb-4">
        <center>Students List</center>
      </h1>
      <div className="card" style={{ width: "85%", margin: "10px auto" }}>
        <h2 align="center" className="mb-4">
          {from} Hostel
        </h2>
        <MDBTable bordered hover scrollY maxHeight="70vh">
          <MDBTableHead columns={students.columns} />
          <MDBTableBody rows={students.rows} />
        </MDBTable>
      </div>
    </Base>
  );
}

export default StudentsList;
