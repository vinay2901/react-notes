import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = ({ isAuthenticated }) =>
  !isAuthenticated ? (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Signup</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/login">Login</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  ) : (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/profile">Profile</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/notes">Notes</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/weather">Weather</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/logout">Logout</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
export default Header;
