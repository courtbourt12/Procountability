import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
// import SignUpForm from "./Register";
// import LoginForm from "../pages/Login";

const AppNavbar = () => {
  
 const logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('user');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Beecoming Me
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/myprofile">
                My Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/friendgoals">
                Friends' Goals
              </Nav.Link>
              <Nav.Link onClick={logout} to="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
