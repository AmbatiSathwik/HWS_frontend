import React from "react";
import Base from "../core/Base";
import "../styles.css";
import {Table} from "react-bootstrap";

let arr = [
    {
        slNo: 1,
        name: "Dr. S. K. Singh",
        department: "Civil",
        designation: "Chief Warden",
        phoneNo: "9234567890"
    },
    {
        slNo: 2,
        name: "Dr. S. K. Singh",
        department: "Chem.",
        designation: "Hostel Office Manager",
        phoneNo: "9234567890"
    },
    {
        slNo: 3,
        name: "Dr. S. K. Singh",
        department: "ECE",
        designation: "Warden",
        phoneNo: "9234567890"
    }];

let header = ["Sl No.", "Name", "Department", "Designation","Phone No."];

const CommitteesTab = () => {
    return (
        <Base>
            <div style={{fontSize:"16px"}}>
                <center><h1>COMMITTEES</h1></center>

                <div className="my-5 card">
                    <center><h3>Hostel Office Committee</h3></center>
                    <div className="card-body">
                        <p>
                            The Hostel Office Committee is responsible for the smooth functioning of the hostel office. The committee is headed by the Chief Warden and consists of the Warden, Hostel Office Manager, Hostel Office Assistant, and the Hostel Office Secretary. The committee is responsible for the maintenance of the hostel office, the hostel office staff, and the hostel office records. The committee is also responsible for the maintenance of the hostel office equipment and the hostel office furniture. The committee is also responsible for the maintenance of the hostel office equipment and the hostel office furniture.
                        </p>
                        <br/>
                        <center><h4>Members</h4></center>
                        <Table striped bordered hover responsive style={{textAlign:"center"}}>
                            <thead>
                                <tr style={{backgroundColor:"#3E54AC", color:"white", fontSize:"1.5rem"}}>
                                    {header.map((item, index) => {
                                        return (
                                            <th key={index} style={{textAlign:"center", verticalAlign:"middle"}}>
                                                {item}
                                            </th>
                                        );})}
                                </tr>
                            </thead>
                            <tbody>
                                {arr.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.slNo}</td>
                                            <td>{item.name}</td>
                                            <td>{item.department}</td>
                                            <td>{item.designation}</td>
                                            <td>{item.phoneNo}</td>
                                        </tr>
                                    );})}
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div className="my-5 card">
                    <center><h3>Mess Committee</h3></center>
                    <div className="card-body">
                        <p>
                            The Mess Committee is responsible for the smooth functioning of the mess. The committee is headed by the Chief Warden and consists of the Warden, Mess Manager, Mess Secretary, and the Mess Assistant. The committee is responsible for the maintenance of the mess, the mess staff, and the mess records. The committee is also responsible for the maintenance of the mess equipment and the mess furniture. The committee is also responsible for the maintenance of the mess equipment and the mess furniture.
                        </p>
                        <br/>
                        <center><h4>Members</h4></center>
                        <Table striped bordered hover responsive style={{textAlign:"center"}}>
                            <thead>
                            <tr style={{backgroundColor:"#3E54AC", color:"white", fontSize:"1.5rem"}}>
                                {header.map((item, index) => {
                                    return (
                                        <th key={index} style={{textAlign:"center", verticalAlign:"middle"}}>
                                            {item}
                                        </th>
                                    );})}
                            </tr>
                            </thead>
                            <tbody>
                            {arr.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.slNo}</td>
                                        <td>{item.name}</td>
                                        <td>{item.department}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.phoneNo}</td>
                                    </tr>
                                );})}
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div className="my-5 card">
                    <center><h3>Wardens Committee</h3></center>
                    <div className="card-body">
                        <p>
                            The Wardens Committee is responsible for the smooth functioning of the hostel. The committee is headed by the Chief Warden and consists of the Warden, Hostel Office Manager, Mess Manager, and the Mess Secretary. The committee is responsible for the maintenance of the hostel, the hostel staff, and the hostel records. The committee is also responsible for the maintenance of the hostel equipment and the hostel furniture. The committee is also responsible for the maintenance of the hostel equipment and the hostel furniture.
                        </p>
                        <br/>
                        <center><h4>Members</h4></center>
                        <Table striped bordered hover responsive style={{textAlign:"center"}}>
                            <thead>
                            <tr style={{backgroundColor:"#3E54AC", color:"white", fontSize:"1.5rem"}}>
                                {header.map((item, index) => {
                                    return (
                                        <th key={index} style={{textAlign:"center", verticalAlign:"middle"}}>
                                            {item}
                                        </th>
                                    );})}
                            </tr>
                            </thead>
                            <tbody>
                            {arr.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.slNo}</td>
                                        <td>{item.name}</td>
                                        <td>{item.department}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.phoneNo}</td>
                                    </tr>
                                );})}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default CommitteesTab;