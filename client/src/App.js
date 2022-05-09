import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Home from "./containers/Home";
import NoMatch from "./containers/NoMatch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;


function Layout() {
  return (
      <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Navbar className= "main-nav"bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
          <img
        src="/trans_med.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="KANM Student Radio Logo"
      />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/apply">Apply</Nav.Link>
              <Nav.Link href="/listen">Listen</Nav.Link>
              <Nav.Link href="/schedule">Schedule</Nav.Link>
              <NavDropdown title="Frequency" id="basic-nav-dropdown">
                <NavDropdown.Item href="/frequency">Concert Reviews</NavDropdown.Item>
                <NavDropdown.Item href="/frequency">Industry</NavDropdown.Item>
                <NavDropdown.Item href="/frequency">Album Reviews</NavDropdown.Item>
                <NavDropdown.Item href="/frequency">Essays</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


