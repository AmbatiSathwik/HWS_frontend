import React from "react";
import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../user/helper/userapicalls";

import "./formspage";
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
      if (localStorage.getItem("role")?.slice(1, -1) === "student") {
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
      } else if (localStorage.getItem("role")?.slice(1, -1) === "mess-admin") {
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

            <Nav.Link href="./formspage">Forms&Applications</Nav.Link>
            {/* <NavDropdown title="Explore Hostels" id="basic-nav-dropdown">
              <NavDropdown.Item href="./explore_hostel#MegaLadiesHostel">
                Mega Hostel-Ladies
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore_hostel#G_Hostel">
                G Hostel
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/explore_hostel#A_Hostel">
                A Hostel
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#B_Hostel">
                B Hostel
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#C_Hostel">
                C Hostel
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#D_Hostel">
                D Hostel
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#E_Hostel">
                E Hostel
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#F_Hostel">
                F Hostel
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#PG1_Hostel">
                PG Hostel-1
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#PG2_Hostel">
                PG Hostel-2
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#MegaGentsHostel">
                Mega Hostel-Gents
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_hostel#MegaGentsNewHostel">
                Mega Hostel New-Gents
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Explore Mess" id="basic-nav-dropdown">
              <NavDropdown.Item href="/explore_mess#MegaLadiesMess">
                Mega Ladies Mess
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore_mess#G_Mess">
                G Mess
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/explore_mess#A_Mess">
                A Mess
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_mess#B_Mess">
                B Mess
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_mess#C_Mess">
                C Mess
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_mess#D_Mess">
                D Mess
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_mess#MegaGentsMess">
                Mega Hostel Mess-Gents
              </NavDropdown.Item>
              <NavDropdown.Item href="./explore_mess#MegaGentsNewMess">
                Mega Hostel New Mess-Gents
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/explore_mess#E_Mess">
                E Mess
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore_mess#F_Mess">
                F Mess
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link href="/explore_hostel">Explore Hostels</Nav.Link>
            <Nav.Link href="/explore_mess">Explore Messes</Nav.Link>
            <Nav.Link href="/messratingspage">Mess Ratings</Nav.Link>
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
