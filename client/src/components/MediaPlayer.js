import React from "react";
import "./MediaPlayer.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function MediaPlayer() {
  return (
    <div className="MediaPlayer">
      
        <Row className="align-items-center">
          {/* Play Button Column */}
          <Col className="playButton " xs="1">
            <FontAwesomeIcon icon={faPlayCircle} />
          </Col>

          {/* Main Column for Text (Spans rest of row) */}
          <Col xs="11">
            <div className="now-playing-container my-2">
              <Row className="align-items-start">

                {/* Song Data Column  */}
                <Col >
                  <p className="now-playing-head">NOW PLAYING</p>
                  <h1 className="now-playing-title">Song Title</h1>
                  <h2 className="now-playing-extra">Artist</h2>
                </Col>

                {/* Show Data Column */}
                <Col className="align-self-end">
                  <Row className="align-items-center" >
                    <Col>
                      <p className="now-playing-head">Current Show</p>
                      <h2 className="now-playing-title">Show Name</h2>
                      <h3 className="now-playing-extra">With DJ</h3>
                    </Col>
                    <Col>
                      <h1 className="now-playing-extra">11:30 am → 1:00 pm</h1>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      
    </div>
  );
}

export default MediaPlayer;
