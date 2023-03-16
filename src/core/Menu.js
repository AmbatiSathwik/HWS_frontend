import React from "react";
import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../user/helper/userapicalls";
import Logo from "../assets/images/nitc-logo.png";

function Menu() {
  const navigate = useNavigate();
  const showLogin = () => {
    if (!isAuthenticated()) {
      return (
        <>
          <Nav.Link href="/login">Login</Nav.Link>
        </>
      );
    } else {
      if (localStorage.getItem("role").slice(1, -1) === "student") {
        return (
          <>
            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item href="./dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#profile">
                Student Details
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#messrating">
                Mess Rating
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#messregistration">
                Mess Registration
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#messcard">
                Mess Card Download
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#messdue">
                Mess Due
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#messarchive">
                Mess Archieve
              </NavDropdown.Item>
              <NavDropdown.Item href="./studentpasswordChange">
                Change Password
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <span
                className="text-warning"
                onClick={() => {
                  signout(() => {
                    navigate("/");
                  });
                }}
              >
                Sign Out
              </span>
            </Nav.Link>
          </>
        );
      } else if (localStorage.getItem("role").slice(1, -1) === "mess-admin") {
        return (
          <>
            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item href="./dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#messrating">
                Mess Ratings
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#enrollment">
                Start Enrollment
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#messdetails">
                Mess Details
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#messavailability">
                Mess Availability
              </NavDropdown.Item>
              <NavDropdown.Item href="./dashboard#studentdetails">
                Student Details
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <span
                className="text-warning"
                onClick={() => {
                  signout(() => {
                    navigate("/");
                  });
                }}
              >
                Sign Out
              </span>
            </Nav.Link>
          </>
        );
      }
    }
  };

  return (
    <div className="navbarMenu">
      <div className="menu">
        <Navbar.Brand href="/">
          <div className="mainlogo">
            <img src={Logo} height="60" alt="Logo" />
            <h3 style={{ color: "white" }}>NITC Hostels</h3>
          </div>
        </Navbar.Brand>
      </div>
      <Navbar bg="dark" variant="dark" expand="lg" className="menu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/explore_hostel">Explore Hostels</Nav.Link>
            <Nav.Link href="/explore_mess">Explore Messes</Nav.Link>
            
            
          </Nav>
          <div className="loginOptions">
            <Nav>{showLogin()}</Nav>
          </div>
          <Nav>
          <Nav.Link href="/complaint">complaints</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
