import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../user/helper/userapicalls";
import Logo from "../assets/images/logo.png";

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
      return (
        <>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
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
  };

  return (
    <div className="navbarMenu">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img src={Logo} width="150" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Explore Hostels" id="basic-nav-dropdown">
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
            </NavDropdown>
          </Nav>
          <Nav>{showLogin()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
