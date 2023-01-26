import React from "react";
import Base from "./Base";
import {Table} from "react-bootstrap"
import { hostelDetails } from "./helper/coreapicalls";
import {HostelCard,Facilities,GroupCards} from "./helper/HostelCard";
import "../styles.css";
import {useLocation} from "react-router-dom";
import CH from "../assets/images/chostel.jpg";
import Gallery from "./Gallery"



const images = [
    {
        source : "../assets/images/chostel.jpg",
        alt : "C Hostel",
    },
    {
        source : "../assets/images/chostel.jpg",
        alt : "C Hostel",
    },
    {
        source : "../assets/images/chostel.jpg",
        alt : "C Hostel",
    },
    {
        source : "../assets/images/chostel.jpg",
        alt : "C Hostel",
    },
    {
        source : "../assets/images/chostel.jpg",
        alt : "C Hostel",
    },
    {
        source : "../assets/images/chostel.jpg",
        alt : "C Hostel",
    },
    {
        source : "../assets/images/chostel.jpg",
        alt : "C Hostel",
    },
    {
        source : "../assets/images/chostel.jpg",
        alt : "C Hostel",
    }
]

function Hostels(props) {
    const details = hostelDetails().data;
    const location = useLocation();
    const {from} = location.state;
    return (
        <Base title="">
            <div id="main" style={{margin:"10px"}}>
                <center><h1>{from.name}</h1></center>
                <HostelCard name="" image={from.img} Hosteldetails = {from} type="2"/>
            </div>

            <hr></hr>

            <div id="facilities" style={{margin:"10px"}}>
                <Facilities hasFacility={true} facilityName="Basketball Court" description="This hostel has Basketball court" image={CH}/>
            </div>

            <hr></hr>

            <div id="Administration" style={{margin:"20px 10px 10px 10px"}}>
                <center><h1>Administration</h1></center>
                <GroupCards />
            </div>

            <hr></hr>

            <div id="Archives" style={{margin:"10px"}}>
                <center><h1>Archives</h1></center>
                <div className="card" style={{backgroundColor:"#ECECEC"}}>
                    <div className="archive-table">
                        <Table responsive bordered hover style={{border:"1px solid black"}}>
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
                <center><h1>Gallery</h1></center>
                <Gallery images={images}/>
            </div>
        </Base>
    );
}

export default Hostels;