import React from "react";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import SocialMedia from "./SocialMedia";


import "./Footer.css";





function Footer() {

    return (
        <div className="Footer">
            {/* Stores the social media buttons above the header */}
            <SocialMedia />

            {/* Stores the true header */}
            <Row className="shadow-sm py-3">
                {/* Stores the logo */}
                <Col xs={12} sm={4}>
                    <div className="logo-wrapper" >
                        <img
                            width="75" height="75"
                            src="/trans_med.png"
                            alt="KANM Student Radio Logo"
                        />
                    </div>
                </Col>

                {/* Stores the text */}
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