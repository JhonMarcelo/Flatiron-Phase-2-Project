import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Switch, Route, NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">KMOK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/home"}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/recipe"}>
              Recipe
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/guide"}>
              Guide
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/about"}>
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Switch></Switch>
      </div>
      <br />
      {/* <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}

export default ColorSchemesExample;
