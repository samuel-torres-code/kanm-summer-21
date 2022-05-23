import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Nav from "react-bootstrap/Nav";

import SocialMedia from "./SocialMedia";


import "./Footer.css";
import NavLink from "react-bootstrap/esm/NavLink";




function Footer() {

    return (
        <div className="Footer">
            <SocialMedia />

            <Row className="shadow-sm py-3">
                <Col xs={12} sm={4}>
                    <div className="logo-wrapper" >
                        <img
                            width="75" height="75"
                            src="/trans_med.png"
                            alt="KANM Student Radio Logo"
                        />
                    </div>
                </Col>

                <Col xs={6} sm={4}>
                    Links
                </Col>
                <Col xs={6} sm={4}>
                    Credits

                </Col>

            </Row>

        </div>
    );

}

export default Footer;