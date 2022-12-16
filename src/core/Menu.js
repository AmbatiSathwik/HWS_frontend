import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "./logo.png";

function Menu() {
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
              <NavDropdown.Item href="./MegaLadiesHostel">
                Mega Hostel-Ladies
              </NavDropdown.Item>
              <NavDropdown.Item href="/G_Hostel">G Hostel</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/A_Hostel">A Hostel</NavDropdown.Item>
              <NavDropdown.Item href="./B_Hostel">B Hostel</NavDropdown.Item>
              <NavDropdown.Item href="./C_Hostel">C Hostel</NavDropdown.Item>
              <NavDropdown.Item href="./D_Hostel">D Hostel</NavDropdown.Item>
              <NavDropdown.Item href="./E_Hostel">E Hostel</NavDropdown.Item>
              <NavDropdown.Item href="./F_Hostel">E Hostel</NavDropdown.Item>
              <NavDropdown.Item href="./MegaGentsHostel">
                Mega Hostel-Gents
              </NavDropdown.Item>
              <NavDropdown.Item href="./MegaGentsNewHostel">
                Mega Hostel New-Gents
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Explore Mess" id="basic-nav-dropdown">
              <NavDropdown.Item href="/MegaLadiesMess">Mega Ladies Mess</NavDropdown.Item>
              <NavDropdown.Item href="/G_Mess">G Mess</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/A_Mess">A Mess</NavDropdown.Item>
              <NavDropdown.Item href="./B_Mess">B Mess</NavDropdown.Item>
              <NavDropdown.Item href="./C_Mess">C Mess</NavDropdown.Item>
              <NavDropdown.Item href="./D_Mess">D Mess</NavDropdown.Item>
              <NavDropdown.Item href="./MegaGentsMess">
                Mega Hostel Mess-Gents
              </NavDropdown.Item>
              <NavDropdown.Item href="./MegaGentsNewMess">
                Mega Hostel New Mess-Gents
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/E_Mess">E Mess</NavDropdown.Item>
              <NavDropdown.Item href="/F_Mess">F Mess</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
