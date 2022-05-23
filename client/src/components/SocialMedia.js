import React from "react";

import Nav from "react-bootstrap/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";



function SocialMedia() {

    return (
        <div className="SocialMedia">
            <Nav className="justify-content-center py-3">
                <Nav.Item >
                    <Nav.Link href="https://twitter.com/KANMRadio" target="_blank">
                        <FontAwesomeIcon size= '2x' icon={faTwitter}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.instagram.com/kanm_radio/" target="_blank">
                        <FontAwesomeIcon size= '2x' icon={faInstagram}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.youtube.com/channel/UC0-wO1RPGgp9I7uCCgXBeRQ" target="_blank">
                        <FontAwesomeIcon size='2x' icon={faYoutube}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    );

}

export default SocialMedia;