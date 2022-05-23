import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Nav from "react-bootstrap/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";



function Footer() {

    return (
        <div className="Footer">
            <Nav className="justify-content-center">
                <Nav.Item >
                    <Nav.Link href="https://twitter.com/KANMRadio" target="_blank">
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.instagram.com/kanm_radio/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.youtube.com/channel/UC0-wO1RPGgp9I7uCCgXBeRQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    );

}

export default Footer;