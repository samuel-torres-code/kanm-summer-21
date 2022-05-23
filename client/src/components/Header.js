import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

import MediaPlayer from "./MediaPlayer";

import "./Header.css";

function Header() {

  const location = useLocation(); //Used to grab client session data
  const [url, setUrl] = useState(null); //Stores the current URL of browser
  //Sets URL
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  //Used to toggle display for media player
  const [openMediaPlayer, setOpenMediaPlayer] = useState(false);


  return (
    <div className="Header">
      {/* Stores Entire Navbar (including anything that pops out of it I.E. MediaPlayer) */}
      <Navbar
        className="main-nav flex-column shadow-sm"
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
      >

        <Container className="border-bottom-primary px-0 mx-0 w-100" fluid>
          {/* KANM Logo */}
          <Navbar.Brand href="/">
            <img
              src="/trans_med.png"
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="KANM Student Radio Logo"
            />
          </Navbar.Brand>

          {/* Toggle to open MediaPlayer row */}
          {/* She isn't the prettiest, I want her on the end of the navbar but it is weird with collapse */}
          <Button
            onClick={() => setOpenMediaPlayer(!openMediaPlayer)}
            aria-controls="example-collapse-text"
            aria-expanded={openMediaPlayer}
            variant="dark"
          >
            <FontAwesomeIcon icon={faHeadphonesSimple}></FontAwesomeIcon>
          </Button>

          {/* Toggle for links when screen is small */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
          />

          {/* Collapse that holds all the links */}
          <Navbar.Collapse width="100" id="basic-navbar-nav">
            <Nav>
              <Nav.Link
                className={url === "/about" ? "  current-location" : ""}
                as={Link}
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className={url === "/schedule" ? " current-location" : ""}
                as={Link}
                to="/schedule"
              >
                Schedule
              </Nav.Link>
              <Nav.Link
                className={url === "/contact" ? "  current-location" : ""}
                as={Link}
                to="/contact"
              >
                Contact
              </Nav.Link>
              <NavDropdown
                className={url === "/frequency" ? " current-location" : ""}
                title="Frequency"
                id="basic-nav-dropdown"
                variant="dark"
                bg="dark"
              >
                <NavDropdown.Item as={Link} to="/frequency">
                  Concert Reviews
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/frequency">
                  Industry
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/frequency">
                  Album Reviews
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/frequency">
                  Essays
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className={url === "/apply" ? "  current-location" : ""}
                as={Link}
                to="/apply"
              >
                Apply
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>


        {/* Collapse that holds the MediaPlayer */}
        <Container className="border-bottom-primary" fluid>
          <Collapse in={openMediaPlayer}>
            <div>
              <MediaPlayer />
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;