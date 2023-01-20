import React, { useState } from "react";
import Base from "../core/Base";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import LOGO from "../assets/GIF/fingerprint-scan.gif";
import key from "../assets/GIF/key.gif";
import Pic from "../assets/images/login_nitc.jpg";
import { Button, Form } from "react-bootstrap";
import {
  authenticate,
  signin,
  isAuthenticated,
  forgotpassword,
} from "./helper/userapicalls";
import { Navigate } from "react-router-dom";

function Signin() {
  const [details, setDetails] = useState({
    username: "b190500cs",
    password: "ec934d7f3a",
    forgot: false,
    loading: false,
    loginas: "student",
    error: "",
  });

  const { username, password, forgot, loading, loginas, error } = details;

  const contactHO = () => {
    if (username === "") {
      return (
        <div
          className="alert alert-success"
          style={{ display: forgot ? "" : "none" }}
        >
          Enter username and click forgot password
        </div>
      );
    }
  };

  const loadingMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: loading ? "" : "none" }}
      >
        Loading
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-warning"
        style={{ display: error !== "" ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const forgotPass = (event) => {
    event.preventDefault();
    if (username) {
      setDetails({ ...details, forgot: true });
      forgotpassword(username).then((data) => {
        if (data.message) {
          setDetails({
            ...details,
            forgot: "Your new password will be sent to your mail.",
          });
        } else {
          setDetails({ ...details, forgot: "Enter proper username." });
        }
      });
    } else {
      setDetails({ ...details, forgot: true });
    }
  };

  const handleChange = (name) => (event) => {
    setDetails({
      ...details,
      error: "",
      forgot: false,
      loading: false,
      [name]: event.target.value,
    });
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Navigate to="/dashboard" />;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setDetails({ ...details, error: "", loading: true });
    signin({ rollno: username, pswd: password, loginas })
      .then((data) => {
        if (data.err) {
          console.log(data.err);
          setDetails({ ...details, error: data.err, loading: false });
        } else {
          data.data.role = details.loginas;
          authenticate(data, () => {
            setDetails({
              username: "",
              password: "",
              loginas: "student",
              error: "",
              loading: false,
              forgot: false,
            });
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Base title="">
      {errorMessage()}
      {contactHO()}
      {loadingMessage()}
      <div className="loginpage">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol sm="6">
              {/* <div className="d-flex flex-row ps-5 pt-5">
                <img src={LOGO} width="70" alt="Login logo" />
                <h3>Log In</h3>
              </div> */}
              <div className="login-heading">
                <img src={LOGO} width="70" alt="Login logo" />
                <span className="login-heading-span">Log In</span>
              </div>

              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                {/* <h3
                  className="fw-normal mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3> */}
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Username"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  placeholder="Username"
                  value={username}
                  right={0}
                  onChange={handleChange("username")}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={handleChange("password")}
                  placeholder="Password"
                />

                <Form.Select
                  className="mb-4 mx-5 w-100"
                  aria-label="Default select example"
                  onChange={handleChange("loginas")}
                >
                  <option value="student">Student</option>
                  <option value="warden">Hostel Warden</option>
                  <option value="hostelofficeadmin">Hostel Office Admin</option>
                  <option value="hostelofficemanager">
                    Hostel Office Manager
                  </option>
                  <option value="has">HAS</option>
                  <option value="caretaker">Hostel Caretaker</option>

                  <option value="hostelseceretary">Hostel Seceretary</option>
                  <option value="">Mess Admin</option>
                </Form.Select>

                <Button
                  className="mb-4 px-5 mx-5 w-100"
                  onClick={onSubmit}
                  color="info"
                  size="lg"
                >
                  Login
                </Button>
                <p className="mx-4">
                  <Button onClick={forgotPass} className="forgot">
                    Forgot password?
                  </Button>
                </p>
              </div>
            </MDBCol>

            <MDBCol sm="6" className="d-none d-sm-block px-0">
              <img
                src={Pic}
                height="100%"
                alt="Login image"
                className="w-100 loginimg"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      {performRedirect()}
    </Base>
  );
}

export default Signin;
