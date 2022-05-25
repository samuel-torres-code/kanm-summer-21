import React from "react";
import "./Schedule.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";




function Schedule() {

  //Needs to be sorted by time ascending
  //Backend needs to filter by day
  //If the show is two hours, it will have two elements, etc.
  const shows = [
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 0, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 1, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 2, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 3, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 4, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 5, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 6, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 7, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 8, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 9, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 10, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: 1, showName: "Sam's Show", weekday: 5, hour: 11, image: "https://4.bp.blogspot.com/_Y4Ao_KEr11k/TUnGfIhC7RI/AAAAAAAAAHU/OIi31pm6quE/s1600/Small+Face+Cat.jpg", dj: "Sam" },
    { id: 2, showName: "Liam's Show", weekday: 5, hour: 12, image: "https://4.bp.blogspot.com/_Y4Ao_KEr11k/TUnGfIhC7RI/AAAAAAAAAHU/OIi31pm6quE/s1600/Small+Face+Cat.jpg", dj: "Liam" },
    { id: 3, showName: "Josh's Show", weekday: 5, hour: 13, image: "https://4.bp.blogspot.com/_Y4Ao_KEr11k/TUnGfIhC7RI/AAAAAAAAAHU/OIi31pm6quE/s1600/Small+Face+Cat.jpg", dj: "Josh" },
    { id: 4, showName: "Miguel's Show", weekday: 5, hour: 14, image: "https://4.bp.blogspot.com/_Y4Ao_KEr11k/TUnGfIhC7RI/AAAAAAAAAHU/OIi31pm6quE/s1600/Small+Face+Cat.jpg", dj: "Miguel" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 15, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 16, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 17, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 18, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 19, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 20, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 21, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 22, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" },
    { id: -1, showName: "AutoDJ", weekday: 5, hour: 23, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ" }
  ];


  const amShowRows = shows.slice(0, 12);
  const pmShowRows = shows.slice(12, 24);






  return (
    <div className="Schedule">
      <Container fluid>
        <Row >
          <h1> TODAYS SHOWS </h1>
        </Row>
        <Row className=" equal-height-columns" >
          
          <Col>
          <div className="equal-height-content">
            {amShowRows.map(
              ({ id, showName, weekday, hour, image, dj }) => (
                <Row className="show-row border-bottom-primary">
                  {showName} {hour === 0 ? 12 : (hour % 12)}:00
                  With {dj}
                  {/* <img className="image-resize" src={image} /> */}
                </Row>
              )
            )}
            </div>
          </Col>
          
          <Col className=" table-wrapper mx-0 my-0 px-0 py-0 center-vertical-line" xs={1}>
          <div className="equal-height-content table-cell-wrapper">
            
            
              <Row className="justify-content-end transparent-background" fluid>
                
                <Col xs={6} className=" py-3 px-0">
                  <div className="left-half float-end">
                    <div className="text-rotate-left">
                    AM
                    </div>
                  </div>
            </Col>
            <Col xs={6} className="py-3 px-0">
              <div className="right-half">
                <div className="text-rotate-right ">
                PM
                </div>
              </div>
            </Col>
            </Row>
            
            </div>
          </Col>


          <Col>
          <div className="equal-height-content">
            {pmShowRows.map(
              ({ id, showName, weekday, hour, image, dj }) => (
                <Row className="show-row border-bottom-primary">
                  {showName} {hour === 12 ? 12 : (hour % 12)}:00
                  With {dj}
                  {/* <img className="image-resize" src={image} /> */}
                </Row>
              )
            )}
            </div>


          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Schedule;