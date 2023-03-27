import {React,useEffect,useState} from "react";
import Base from "./Base";
import { Col, Row } from "react-bootstrap";
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Modal_1 from "./Modal_1.js";
import "../styles.css";
import { getMessDetailsByMessId,getMessAvailabilityByMessId } from "../mess/helper/messapicalls";
import {getHostelDetailsByHostelId} from "./helper/coreapicalls";

function HostelOfficeManager() {

    const changeClass = (im) => {
        im.className = "card showCard"

    }
    const config = {
        rootMargin:"0px 0px 0px 0px",
        threshold: 0
    }
    useEffect(()=>{

        const observer = new window.IntersectionObserver((entries,self)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting)
                {
                    changeClass(entry.target)
                    self.unobserve(entry.target)
                }

            })
        })
        const obs = document.querySelectorAll('.card')
        obs.forEach((ob)=>{
            observer.observe(ob)
        },config)

        return ()=>{
            obs.forEach((ob)=>{
                observer.unobserve(ob)
            })
        }

    },[]);

    //search section
    const [search,setsearch]=useState("");
    const [details,setdetails]=useState("Student details");

    const data_d = {
      columns: [
        {
          label: 'Hostelid',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Hostel ',
          field: 'first',
          sort: 'asc'
        },
        {
          label: 'Vacancy',
          field: 'second',
          sort: 'asc'
        },
        {
          label: 'Capacity',
          field: 'third',
          sort: 'asc'
          },
  
      ],
      rows: [
        {
          'id':'1',
          'first': 'MLH',
          'second': '0',
          'third': '100'
          
        },
        {
          'id':'2',
          'first': 'LH',
          'second': '0',
          'third': '100'
        },
        {
          'id':'3',
          'first': 'E',
          'second': '0',
          'third': '100'
        },
        {
          'id':'4',
          'first': 'A',
          'second': '0',
          'third': '100'
        },
      ]
    }
    
    
    const mess = {
      columns: [
        {
          label:'MessId',
          field:'id',
          sort:'asc'

        },
        {
          label: 'MessName',
          field: 'first',
          sort: 'asc'
        },
        {
          label: 'Capacity',
          field: 'second',
          sort: 'asc'
        },
        {
          label: 'Vacancy',
          field: 'third',
          sort: 'asc'
        },
        {
          label: 'Boys Capacity',
          field: 'fourth',
          sort: 'asc'
          },
        {
          label: 'Girls Capacity',
          field: 'fifth',
          sort: 'asc'
          },
  
      ],
      rows:[
      { 'id': "1",  'first': "Mess A"    , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "2",  'first': "Mess B"    , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "3",  'first': "Mess C"    , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "4",  'first': "Mess D"    , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "5",  'first': "Mess E"    , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "6",  'first': "Mess F"    , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "7",  'first': "Mess G"    , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "8",  'first': "Mess IH"   , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "9",  'first': "Mess MBH"  , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "10", 'first': "Mess MBH2" , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "11", 'first': "Mess Lh"   , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0},
      { 'id': "12", 'first': "Mess MLH"  , 'second' : 100, 'third':0 , 'fourth': 0, 'fifth':0}]
    }
   

    let messIdMap = new Map([
      [1, "Mess A"],
      [2, "Mess B"],
      [3, "Mess C"],
      [4, "Mess D"],
      [5, "Mess E"],
      [6, "Mess F"],
      [7, "Mess G"],
      [8, "Mess IH"],
      [9, "Mess MBH"],
      [10, "Mess MBH2"],
      [11, "Mess Lh"],
      [12, "Mess MLH"],
    ]);

    let hostelIdMap = new Map([
      [1, "MLH"],
      [2, "LH"],
      [3, "MBH-2"],
      [4, "A"],
      [5, "B"],
      [6, "C"],
      [7, "D"],
      [8, "E"],
      [9, "F"],
      [10, "MBH-1"],
      [11, "G"],
      [12, "Phd"],
    ]);
        const [Arr,setArr]=useState([]);
        useEffect(()=>{
              let i=1;

              while(i<=12){
                getMessDetailsByMessId(i)
                .then((data)=> {
                  //console.log(data)
                  if(data!= null)
                  {
                    data.data.name=messIdMap.get(data.data.messId)
                    setArr((state) => [...state, data.data]);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
                i++;
              }

            },[]);
/*
            const [arr,setarr]=useState([]);
            useEffect(()=>{
              let i=1;

              while(i<=12){
                getHostelDetailsByHostelId(i)
                .then((data)=> {
                  console.log(data)
                  if(data!= null)
                  {
                    data.data.name=hostelIdMap.get(data.data.hostelId)
                    setArr((state) => [...state, data.data]);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
                i++;
              }

            },[]);*/
          
    

    

    return (
        <Base title="Hostel Office Manager">
            <h1 className="mt-3 mb-2"><center>Hostel Office Manager</center></h1>
            
            <div className="card" style={{backgroundColor:"#ECECEC"}} >
                <h2 align="center" className="mb-4">Search Student</h2>
                <Row>
                    <Col  xs="4" sm="3" className="column">
                        <p style={{display:"inline-block", fontSize:"22px"}}>Roll Number:</p>
                    </Col>
                    <Col xs="8" sm="6">
                        <MDBInput value={search}  id='typeText' style={{backgroundColor:"white"}} type='text' onChange={(x)=>{setsearch(x.target.value)}} />
                    </Col>
                </Row>
                <Row>
                    <Col align={'right'}>
                        <Modal_1  heading="Search" className="me-2 mt-3" content={details}/>
                    </Col>
                </Row>
            </div>
            
            <div >
                <center><h1>HOSTELS</h1></center>
                <div className="card" style={{backgroundColor:"#ECECEC"}}>
                <table className="table">
                <thead>
                    <tr>
                      <th scope="col">Hostel Id</th>
                      <th scope="col">Hostel</th>
                      <th scope="col">Capacity(Rooms)</th>
                      <th scope="col">Vacancy</th>

                    </tr>
                  </thead>
              {/*arr.map((x)=> (
                <tbody key={x.hostelId}>
                      
                      <tr scope="row">

                        <td>{x.hostelId?x.hostelId:"NA"}</td>
                        <td>{x.name?x.name: messIdMap.get(x.hostelId)}</td>
                        <td>{x.rooms?x.rooms:"NA"}</td>
                        <td>{x.phno?x.phno:"NA"}</td>
                       
                      </tr>
                    </tbody>
              )
              )*/}
                    

                </table>
                </div>
            </div>

            <div >
                <center><h1>MESS</h1></center>
                <div className="card" style={{backgroundColor:"#ECECEC"}}>
                
                <table className="table">
                <thead>
                    <tr>
                      <th scope="col">MessId</th>
                      <th scope="col">MessName</th>
                      <th scope="col">Capacity</th>
                      <th scope="col">Boys Capacity</th>
                      <th scope="col">Girls Capacity</th>
                      <th scope="col">Vacancy</th>

                    </tr>
                  </thead>
              {Arr.map((x)=> (
                <tbody key={x.messId}>
                      
                      <tr scope="row">

                        <td>{x.messId?x.messId:"NA"}</td>
                        <td>{x.name?x.name: messIdMap.get(x.messId)}</td>
                        <td>{x.capacity?x.capacity:"NA"}</td>
                        <td>{x.boyCapacity?x.boyCapacity:"NA"}</td>
                        <td>{x.girlCapacity?x.girlCapacity:"NA"}</td>
                        <td>{x.girlCapacity?x.girlCapacity:"NA"}</td>
                      </tr>
                    </tbody>
              )
              )}
                    

                </table>
                </div>
            </div>

            <div >
                <center><h1>ARCHIVES</h1></center>
                
                <div className="card" style={{backgroundColor:"#ECECEC"}}>
                <table className="table">
                <thead>
                    <tr>
                      <th scope="col">Name </th>
                      <th scope="col">From</th>
                      <th scope="col">To </th>
                      <th scope="col">Contact</th>

                    </tr>
                  </thead>

                  <tbody>
                    <tr scope="row">
                      <td>ABCD</td>
                      <td>January 2022</td>
                      <td>March 2023</td>
                      <td>12345</td>
                    </tr>
                  </tbody>
                    
                </table>
                </div>
                </div>
          
            
            </Base>
    );
}

export default HostelOfficeManager;
