import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Recipe from "./Recipe";
import Guide from "./Guide";
import About from "./About";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">KMOK</Navbar.Brand>
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
          <Route path="/guide">
            <Guide />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <br />
    </>
  );
}

export default ColorSchemesExample;
