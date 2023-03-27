import React, { useEffect, useState } from "react";
import { Button, Col, Row, Form, Table } from "react-bootstrap";
import Base from "../core/Base";
import LG1 from "../assets/images/studentintro.png";
import { Rating } from "react-simple-star-rating";
import {
  studentDetails,
  studentMessDetails,
  getMessName,
  submitMessReview,
  checkMessReview,
  messVacancy,
  registerStudentMess,
  updateStudentMess,
  previousMessDetails,
  getPreferences,
  submitpreference,
  updatepreference,
} from "./helper/studentapicalls";
import MC from "../assets/images/messcard.png";
import { jsPDF } from "jspdf";
import NL1 from "../assets/images/nitc-logo-black.png";
import { Switch } from "@mui/material";

//details, mess registration, mess card details with download, mess dues,
function StudentProfile() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    rollno: "",
    dob: "",
    phno: "",
    address: "",
    gender: "",
  });

  const [messdetails, setMessDetails] = useState({
    month: "",
    year: "",
    messId: "",
    messName: "",
    messUserId: "",
    isAvailable: false, //change
  });

  const [rating, setRating] = useState({
    quality: 0,
    quantity: 0,
    taste: 0,
    catering: 0,
    hygine: 0,
    puntuality: 0,
    isDone: false,
  });

  const [previousMess, setpreviousMess] = useState({ data: [] });

  const [vacancy, setVacancy] = useState({ available: [] });

  const messname = {
    1: "Test 1",
    2: "Test 2",
    3: "Test 3",
    4: "Test 4",
    5: "Test 5",
  };

  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", { month: "long" });
  };

  const date = new Date();
  const mon = date.getMonth() + 1 + 1 <= 12 ? date.getMonth() + 1 : 1;
  const yea =
    date.getMonth() + 2 <= 12 ? date.getFullYear() : date.getFullYear() + 1;

  useEffect(() => {
    studentDetails().then((data) => {
      if (data.err) {
        console.log(data.err);
      } else {
        setDetails({
          ...details,
          name: data.data.name,
          email: data.data.email,
          rollno: data.data.rollno,
          dob: data.data.dob,
          phno: data.data.phno,
          address: data.data.address,
          gender: data.data.gender,
        });
      }
    });

    studentMessDetails(mon, yea).then((data) => {
      if (data.err) {
        setMessDetails({ ...messdetails, isAvailable: false });
        studentMessDetails(date.getMonth() + 1, date.getFullYear()).then(
          (data) => {
            if (data.err) {
              setMessDetails({ ...messdetails, isAvailable: false });
            } else {
              setMessDetails({
                ...messdetails,
                year: data.data.year,
                month: data.data.month,
                messId: data.data.messId,
                messName: messname[data.data.messId],
                messUserId: data.data.id,
                isAvailable: true,
              });
            }
          }
        );
      } else {
        setMessDetails({
          ...messdetails,
          year: data.data.year,
          month: data.data.month,
          messId: data.data.messId,
          messName: messname[data.data.messId],
          messUserId: data.data.id,
          isAvailable: true,
        });
      }
    });

    messVacancy().then((data) => {
      setVacancy({ ...vacancy, available: data.data });
    });

    previousMessDetails().then((data) => {
      data.data.map((obj) => {
        setpreviousMess({
          ...previousMess,
          data: previousMess.data.append({
            year: obj.year,
            month: obj.month,
            messName: messname[obj.messId],
          }),
        });
      });
    });
  }, []);

  useEffect(() => {
    checkMessReview().then((data) => {
      setRating({
        ...rating,
        isDone: data.data.review,
        quality: data.data.rating.quality,
        quantity: data.data.rating.quantity,
        taste: data.data.rating.taste,
        catering: data.data.rating.catering,
        hygine: data.data.rating.hyginess,
        puntuality: data.data.rating.punctuality,
      });
    });
  }, []);

  let degree =
    details.rollno[0] === "b"
      ? "B.Tech"
      : details.rollno[0] === "m"
      ? "M.Tech"
      : "Ph.D";

  const msg = () => {
    if (messdetails.isAvailable) {
      return (
        <>
          <h3>Hi {details.name},</h3>
          <br />
          <h4>
            You are allocated a {messdetails.messName || "No mess"} for the
            month of {getMonthName(messdetails.month)}. Collect your mess card
            here.
          </h4>
          <br />
          <a className="btn btn-primary" href="#messcard">
            Mess Card
          </a>
        </>
      );
    } else {
      return (
        <>
          <h3>Hi {details.name},</h3>
          <br />
          <h4>
            You are not allocated a mess for the month of{" "}
            {getMonthName(date.getMonth() + 1)}. If you didn't payed the fees.
            Please do pay and register for mess here.
          </h4>
          <br />
          <a className="btn btn-primary" href="#messregistration">
            Register Mess
          </a>
        </>
      );
    }
  };

  const onRatingClick = (name) => (rate) => {
    setRating({ ...rating, [name]: rate });
  };

  const onReviewSubmit = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const roll = localStorage.getItem("id")?.slice(1, -1);
    const review = {
      messId: messdetails.messId,
      studentId: roll,
      year: year,
      month: month,
      quality: rating.quality,
      quantity: rating.quantity,
      taste: rating.taste,
      catering: rating.catering,
      hygieness: rating.hygine,
      puntuality: rating.puntuality,
    };
    submitMessReview(review).then((data) => {
      setRating({ ...rating, isDone: data.data.review });
    });
  };

  const showRating = () => {
    const ratingAvailable = date.getDate() >= 25 ? true : false;
    if (ratingAvailable) {
      if (!messdetails.isAvailable) {
        return (
          <strong>
            <p align="center">
              You didn't took the mess for the month of{" "}
              {getMonthName(date.getMonth() + 1)}, So you are unable to rate
              mess for this month.{" "}
            </p>
          </strong>
        );
      } else {
        if (!rating.isDone) {
          return (
            <>
              <Row>
                <Col align="right">
                  <strong>Mess Name:</strong>
                </Col>
                <Col align="left">{messdetails.messName}</Col>
              </Row>
              <br />
              <Row>
                <Col align="right">
                  <strong>Month, Year:</strong>
                </Col>
                <Col align="left">
                  {getMonthName(messdetails.month)}, {messdetails.year}
                </Col>
              </Row>
              <br />
              <Row>
                <Col align="right" className="my-1">
                  <strong>Quality:</strong>
                </Col>
                <Col align="left">
                  <Rating onClick={onRatingClick("quality")} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col align="right" className="my-1">
                  <strong>Quantity:</strong>
                </Col>
                <Col align="left">
                  <Rating onClick={onRatingClick("quantity")} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col align="right" className="my-1">
                  <strong>Taste:</strong>
                </Col>
                <Col align="left">
                  <Rating onClick={onRatingClick("taste")} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col align="right" className="my-1">
                  <strong>Catering:</strong>
                </Col>
                <Col align="left">
                  <Rating onClick={onRatingClick("catering")} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col align="right" className="my-1">
                  <strong>hygine:</strong>
                </Col>
                <Col align="left">
                  <Rating onClick={onRatingClick("hygine")} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col align="right" className="my-1">
                  <strong>Puntuality:</strong>
                </Col>
                <Col align="left">
                  <Rating onClick={onRatingClick("puntuality")} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col align="center">
                  <Button
                    onClick={onReviewSubmit}
                    variant="primary"
                    disabled={rating.isDone}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </>
          );
        } else {
          return (
            <strong>
              <p align="center">
                You already rated the {messdetails.messName} mess for the month
                of {getMonthName(date.getMonth() + 1)}, So you are unable to
                rate mess for this month again.{" "}
              </p>
              <br />
              <p align="center">Your rating are:</p>
              <Row>
                <Col align="center">Quality : {rating.quality}</Col>
              </Row>
              <Row>
                <Col align="center">Quantity : {rating.quantity}</Col>
              </Row>
              <Row>
                <Col align="center">Taste : {rating.taste}</Col>
              </Row>
              <Row>
                <Col align="center">Catering : {rating.catering}</Col>
              </Row>
              <Row>
                <Col align="center">Hygieness : {rating.hygine}</Col>
              </Row>
              <Row>
                <Col align="center">Punctuality : {rating.puntuality}</Col>
              </Row>
            </strong>
          );
        }
      }
    } else {
      return (
        <strong>
          <p align="center">
            Mess Rating for the month of {getMonthName(date.getMonth() + 1)}{" "}
            will be available from 25th of this month.
          </p>
        </strong>
      );
    }
  };

  const [messreg, setMessReg] = useState({ messId: "none" });
  const handleMessReg = (event) => {
    setMessReg({ messId: event.target.value });
  };

  const messRegistration = () => {
    if (messreg.messId !== "none") {
      const messUser = {
        studentId: details.rollno,
        gender: details.gender,
        messId: messreg.messId,
      };
      registerStudentMess(messUser).then((data) => {
        setMessDetails({
          ...messdetails,
          year: data.data.year,
          month: data.data.month,
          messId: data.data.messId,
          messName: messname[data.data.messId],
          messUserId: data.data.id,
          isAvailable: true,
        });
      });
    }
  };

  const messUpdate = () => {
    if (messreg.messId !== "none") {
      const messUser = {
        studentId: details.rollno,
        gender: details.gender,
        messId: messreg.messId,
      };
      updateStudentMess(messUser).then((data) => {
        setMessDetails({
          ...messdetails,
          messId: messreg.messId,
          messName: messname[messreg.messId],
        });
        window.location.reload(false);
      });
    }
  };

  const showMessRegistration = () => {
    const [mess_availabe, setMessAvailable] = useState([1, 2, 3, 4, 5]);

    const [preferences, setPreferences] = useState({
      havePrefs: false,
      pref1: "null",
      pref2: "null",
      pref3: "null",
    });

    const [veg, changeVeg] = useState(false);

    const handleVeg = () => {
      changeVeg(!veg);
    };

    useEffect(() => {
      getPreferences().then((data) => {
        if (data.err) {
          console.log(data);
        } else {
          changeVeg(data.data.isVeg);
          setPreferences({
            ...preferences,
            havePrefs: true,
            pref1: data.data.pref1,
            pref2: data.data.pref2,
            pref3: data.data.pref3,
          });
        }
      });
    }, []);

    const handleOptions = (e) => {
      if (e.target.name === "pref1") {
        if (e.target.value !== "null") {
          if (preferences.pref1 === "null") {
            setPreferences({ ...preferences, pref1: e.target.value });
            const new_mess = [];
            mess_availabe.forEach((item) => {
              if (item !== parseInt(e.target.value)) {
                new_mess.push(item);
              }
            });
            setMessAvailable(new_mess);
          } else {
            const old_pref = parseInt(preferences.pref1);
            setPreferences({ ...preferences, pref1: e.target.value });
            const new_mess = [old_pref];
            mess_availabe.forEach((item) => {
              if (item !== parseInt(e.target.value)) {
                new_mess.push(item);
              }
            });
            setMessAvailable(new_mess);
          }
        } else {
          const old_pref = parseInt(preferences.pref1);
          setPreferences({ ...preferences, pref1: "null" });
          const new_mess = [old_pref];
          mess_availabe.forEach((item) => {
            if (item !== parseInt(e.target.value)) {
              new_mess.push(item);
            }
          });
          setMessAvailable(new_mess);
        }
      } else if (e.target.name === "pref2") {
        if (e.target.value !== "null") {
          if (preferences.pref2 === "null") {
            setPreferences({ ...preferences, pref2: e.target.value });
            console.log(e.target.value);
            const new_mess = [];
            mess_availabe.forEach((item) => {
              if (item !== parseInt(e.target.value)) {
                new_mess.push(item);
              }
            });
            setMessAvailable(new_mess);
          } else {
            const old_pref = parseInt(preferences.pref2);
            console.log(preferences);
            setPreferences({ ...preferences, pref2: e.target.value });
            const new_mess = [old_pref];
            mess_availabe.forEach((item) => {
              if (item !== parseInt(e.target.value)) {
                new_mess.push(item);
              }
            });
            setMessAvailable(new_mess);
          }
        } else {
          const old_pref = parseInt(preferences.pref2);
          setPreferences({ ...preferences, pref2: "null" });
          const new_mess = [old_pref];
          mess_availabe.forEach((item) => {
            if (item !== parseInt(e.target.value)) {
              new_mess.push(item);
            }
          });
          setMessAvailable(new_mess);
        }
      } else if (e.target.name === "pref3") {
        if (e.target.value !== "null") {
          if (preferences.pref3 === "null") {
            setPreferences({ ...preferences, pref3: e.target.value });
            console.log(e.target.value);
            const new_mess = [];
            mess_availabe.forEach((item) => {
              if (item !== parseInt(e.target.value)) {
                new_mess.push(item);
              }
            });
            setMessAvailable(new_mess);
          } else {
            const old_pref = parseInt(preferences.pref3);
            console.log(preferences);
            setPreferences({ ...preferences, pref3: e.target.value });
            const new_mess = [old_pref];
            mess_availabe.forEach((item) => {
              if (item !== parseInt(e.target.value)) {
                new_mess.push(item);
              }
            });
            setMessAvailable(new_mess);
          }
        } else {
          const old_pref = parseInt(preferences.pref3);
          setPreferences({ ...preferences, pref3: "null" });
          const new_mess = [old_pref];
          mess_availabe.forEach((item) => {
            if (item !== parseInt(e.target.value)) {
              new_mess.push(item);
            }
          });
          setMessAvailable(new_mess);
        }
      }
    };

    const addPrefOption = (pref) => {
      if (pref === 1 && preferences.pref1 !== "null") {
        return (
          <option value={preferences.pref1}>
            {messname[parseInt(preferences.pref1)]}
          </option>
        );
      } else if (pref === 2 && preferences.pref2 !== "null") {
        return (
          <option value={preferences.pref2}>
            {messname[parseInt(preferences.pref2)]}
          </option>
        );
      } else if (pref === 3 && preferences.pref3 !== "null") {
        return (
          <option value={preferences.pref3}>
            {messname[parseInt(preferences.pref3)]}
          </option>
        );
      }
    };
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const submitPreference = () => {
      submitpreference(preferences, veg, details.gender)
        .then((data) => {
          console.log(data);
        })
        .catch((data) => {
          console.log(data);
        });
    };

    const updatePreferece = () => {
      updatepreference(preferences, veg, details.gender)
        .then((data) => {
          console.log(data);
        })
        .catch((data) => {
          console.log(data);
        });
    };

    const temp = 26; //date.getDate()

    if (temp >= 25) {
      if (!preferences.havePrefs) {
        return (
          <div>
            <Row>
              <Col align="center">
                <Switch checked={veg} onChange={handleVeg}></Switch>
                <label for="veggie-toggle">Are you vegiterian??</label>
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="pref-1" align="center">
                <label for="pref1">Preference - 1:</label>
                <br />
                <select
                  id="pref1"
                  name="pref1"
                  className="pref"
                  onChange={handleOptions}
                  value={preferences.pref1}
                >
                  <option value="null">Preference - 1</option>
                  {addPrefOption(1)}
                  {mess_availabe.map((item) => {
                    return <option value={item}>{messname[item]}</option>;
                  })}
                </select>
              </Col>
              <Col className="pref-2" align="center">
                <label for="pref2">Preference - 2:</label>
                <br />
                <select
                  id="pref2"
                  name="pref2"
                  className="pref"
                  onChange={handleOptions}
                  value={preferences.pref2}
                >
                  <option value="null">Preference - 2</option>
                  {addPrefOption(2)}
                  {mess_availabe.map((item) => {
                    return <option value={item}>{messname[item]}</option>;
                  })}
                </select>
              </Col>
              <Col className="pref-3" align="center">
                <label for="pref3">Preference - 3:</label>
                <br />
                <select
                  id="pref3"
                  name="pref3"
                  className="pref"
                  onChange={handleOptions}
                  value={preferences.pref3}
                >
                  <option value="null">Preference - 3</option>
                  {addPrefOption(3)}
                  {mess_availabe.map((item) => {
                    return <option value={item}>{messname[item]}</option>;
                  })}
                </select>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col align="center">
                <Button onClick={submitPreference}>Submit</Button>
              </Col>
            </Row>
          </div>
        );
      } else {
        return (
          <div>
            <Row>
              <Col align="center">
                You already submitted your preferences for the next month mess.
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <strong>Preference - 1 : </strong>
                <span>{preferences.pref1}</span>
              </Col>
              <Col>
                <strong>Preference - 2 : </strong>
                <span>{preferences.pref2}</span>
              </Col>
              <Col>
                <strong>Preference - 3 : </strong>
                <span>{preferences.pref3}</span>
              </Col>
            </Row>
            <br />
            <Row>
              <Col align="center">
                <Switch checked={veg} onChange={handleVeg}></Switch>
                <label for="veggie-toggle">Are you vegiterian??</label>
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="pref-1" align="center">
                <label for="pref1">Preference - 1:</label>
                <br />
                <select
                  id="pref1"
                  name="pref1"
                  className="pref"
                  onChange={handleOptions}
                  value={preferences.pref1}
                >
                  <option value="null">Preference - 1</option>
                  {addPrefOption(1)}
                  {mess_availabe.map((item) => {
                    return <option value={item}>{messname[item]}</option>;
                  })}
                </select>
              </Col>
              <Col className="pref-2" align="center">
                <label for="pref2">Preference - 2:</label>
                <br />
                <select
                  id="pref2"
                  name="pref2"
                  className="pref"
                  onChange={handleOptions}
                  value={preferences.pref2}
                >
                  <option value="null">Preference - 2</option>
                  {addPrefOption(2)}
                  {mess_availabe.map((item) => {
                    return <option value={item}>{messname[item]}</option>;
                  })}
                </select>
              </Col>
              <Col className="pref-3" align="center">
                <label for="pref3">Preference - 3:</label>
                <br />
                <select
                  id="pref3"
                  name="pref3"
                  className="pref"
                  onChange={handleOptions}
                  value={preferences.pref3}
                >
                  <option value="null">Preference - 3</option>
                  {addPrefOption(3)}
                  {mess_availabe.map((item) => {
                    return <option value={item}>{messname[item]}</option>;
                  })}
                </select>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col align="center">
                <Button onClick={updatePreferece}>Submit</Button>
              </Col>
            </Row>
          </div>
        );
      }
    } else if (temp >= 1 && temp <= 5) {
      return <h1>daskjdashnn</h1>;
    } else {
      return (
        <Row>
          <Col align="center">
            <strong>
              Mess registration for next month will be available from 25th of
              this month
            </strong>
          </Col>
        </Row>
      );
    }
  };

  const messCardDownload = () => {
    const doc = new jsPDF();
    doc.addImage(NL1, "PNG", 30, 30, 20, 20);
    doc.setFontSize(22);
    doc.text("MESS CARD", 100, 20, { align: "center" });
    doc.setFontSize(16);
    const messid = `Mess User Id : ${messdetails.messUserId}`;
    const dt = `Date : ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    const info = `This mess card is given to ${
      details.name
    } with roll number of \n ${details.rollno} has issued ${
      messdetails.messName
    } mess for the month of \n ${getMonthName(messdetails.month)}, ${
      messdetails.year
    }.`;
    const messName = `Mess Name : ${messdetails.messName}`;

    doc.text(messid, 150, 40);
    doc.text(dt, 150, 50);
    doc.text(info, 30, 70);
    doc.text(messName, 30, 100);
    doc.save("messcard.pdf");
  };

  const showMessCard = () => {
    if (messdetails.isAvailable) {
      return (
        <Row>
          <Col align="center">
            <img src={MC} alt="just messcard logo" />
          </Col>
          <Col>
            <div className="messcarddownload">
              <Row>
                <h3 align="center">MESS CARD</h3>
                <Col>Mess User Id : {messdetails.messUserId}</Col>
              </Row>
              <br />
              <Row>
                <Col>
                  This mess card is given to {details.name} with roll number of{" "}
                  {details.rollno} has issued {messdetails.messName} for the
                  month of {getMonthName(messdetails.month)}, {messdetails.year}
                  .
                </Col>
              </Row>
              <br />
              <Row>
                <Col align="right">
                  <Button onClick={messCardDownload}>Download Mess Card</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col align="center">
            <img src={MC} alt="just messcard logo" />
          </Col>
          <Col align="center">
            <div className="messcarddownload">
              <h4>
                You didn't registered for mess yet. Please register for mess to
                get your Mess Card.
              </h4>
            </div>
          </Col>
        </Row>
      );
    }
  };

  useEffect(() => {
    previousMessDetails().then((data) => {
      setpreviousMess({
        ...previousMess,
        data: data.data,
      });
    });
  }, []);

  //   {id: 1, month: 3, year: 2023, messId: 2, studentId: 'b190500cs'}
  // length
  // :
  // 1
  // [[Prototype]]
  // :
  // Array(0)
  // [[Prototype]]
  // :
  // Object

  const previousmess = () => {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Mess User Id</th>
              <th>Month</th>
              <th>Year</th>
              <th>Mess Name</th>
            </tr>
          </thead>
          <tbody>
            {[...previousMess.data].reverse().map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.id}</td>
                  <td>{getMonthName(data.month)}</td>
                  <td>{data.year}</td>
                  <td>{messname[data.messId]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

  const [type, setType] = useState("Mess");

  return (
    <Base>
      <h2 align="center">STUDENT DASHBOARD</h2>
      <div className="studentContainer">
        <div id="profile" className="p-4">
          <h3 align="center">Student Details</h3>
          <br />
          <Row>
            <Col align="center">
              <strong>
                <label>Roll Number</label>
              </strong>
              <div>{details.rollno.toUpperCase()}</div>
            </Col>
            <Col align="center">
              <strong>
                <label>Name</label>
              </strong>
              <div>{details.name}</div>
            </Col>
            <Col align="center">
              <strong>
                {" "}
                <label>Degree</label>
              </strong>
              <div>{degree}</div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="center">
              <strong>
                <label>Email</label>
              </strong>
              <div>{details.email}</div>
            </Col>
            <Col align="center">
              <strong>
                <label>Date of Birth</label>
              </strong>
              <div>{details.dob.split("-").reverse().join("-")}</div>
            </Col>
            <Col align="center">
              <strong>
                <label>Phone Number</label>
              </strong>
              <div>{details.phno}</div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col align="center">
              <strong>
                {" "}
                <label>Address</label>
              </strong>
              <div>{details.address}</div>
            </Col>
            <Col align="center">
              <strong>
                <label>Hostel Name</label>
              </strong>
              <div></div>
            </Col>
            <Col align="center">
              <strong>
                <label>Room Number</label>
              </strong>
              <div></div>
            </Col>
          </Row>
          <br />
        </div>
        <br />

        <div id="messdue" className="p-4">
          <h3 align="center">Dues</h3>
          <br />
        </div>
        <br />

        <div>
          <Row>
            <Col className="studentPageCol" align="right">
              <button
                className={
                  type === "Mess"
                    ? "studentPageButton studentPageButtonactive"
                    : "studentPageButton"
                }
                onClick={() => {
                  setType("Mess");
                }}
              >
                <strong>MESS</strong>
              </button>
            </Col>
            <Col className="studentPageCol" align="left ">
              <button
                className={
                  type === "Hostel"
                    ? "studentPageButton studentPageButtonactive"
                    : "studentPageButton"
                }
                onClick={() => {
                  setType("Hostel");
                }}
                disabled
              >
                <strong>HOSTEL</strong>
              </button>
            </Col>
          </Row>
        </div>
        <br />

        <div id="studentintro" className="p-4 mt-2">
          <Row>
            <Col align="center" className="studentintroimg">
              <img src={LG1} alt="student image" width="80%" height="100%" />
            </Col>
            <Col>
              <div className="studentintrotex">{msg()}</div>
            </Col>
          </Row>
        </div>
        <br />

        <div id="messrating" className="p-4">
          <h3 align="center">Mess Rating</h3>
          <br />
          {showRating()}
        </div>
        <br />
        <div id="messregistration" className="p-4">
          <h3 align="center">Mess Registration</h3>
          <br />
          {showMessRegistration()}
        </div>
        <br />
        <div id="messcard" className="p-4">
          <h3 align="center">Mess Card Download</h3>
          <br />
          {showMessCard()}
        </div>
        <br />

        <div id="messarchive" className="p-4">
          <h3 align="center">Your Previous Mess Details</h3>
          <br />
          {previousmess()}
        </div>
        <br />
        <br />
      </div>
    </Base>
  );
}

export default StudentProfile;
