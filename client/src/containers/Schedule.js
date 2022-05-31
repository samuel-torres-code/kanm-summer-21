import { React, useState } from "react";

import "./Schedule.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { DateTime } from "luxon";
import { getShows } from "../api/Services";




function Schedule() {

  //Needs to be sorted by time ascending
  //If the show is two hours, it will have two elements, etc.
  //Fields: id, showName, genre, weekday, hour, image, dj, specialty
  const shows = getShows;
  const today = DateTime.now().toFormat('cccc').toString().toLowerCase();
  const [day, setDay] = useState(today); //Stores the current URL of browser


  return (
    <div className="Schedule">
      <Container fluid>
        <Row className="justify-content-start day-row" >

          <Form.Select style={{width: today.length*1.5 + 'rem'}} className="text-spacing-primary bolder-text bigger-text" aria-label="Weekday Schedule Select" defaultValue={today} onChange={(e) => {
            const selectedDay = e.target.value;
            setDay(selectedDay);
          }} >
            <option value="sunday">SUNDAY</option>
            <option value="monday">MONDAY</option>
            <option value="tuesday">TUESDAY</option>
            <option value="wednesday">WEDNESDAY</option>
            <option value="thursday">THURSDAY</option>
            <option value="friday">FRIDAY</option>
            <option value="saturday">SATURDAY</option>
          </Form.Select>

          <Col className="py-2 text-spacing-primary bigger-text">SHOWS</Col>


        </Row>
        <Row className=" equal-height-columns" >

          <Col >
            <div className="equal-height-content">
              {shows.filter(show => show.hour < 12 && show.weekday === day).map
                (filteredShow => (
                  <Row className="show-row border-bottom-primary shadow-sm" key={filteredShow.hour}>
                    <Col >
                      <Row >
                        <div className="text-spacing-primary float-start bolder-text">
                          {filteredShow.showName}
                        </div>
                      </Row>
                      <Row>
                        <div className="text-spacing-secondary float-start">
                          With {filteredShow.dj}
                        </div>
                      </Row>
                    </Col>
                    <Col>
                      <div className="text-spacing-primary bolder-text">
                        {filteredShow.hour === 0 ? 12 : (filteredShow.hour % 12)}:00
                      </div>
                    </Col>

                    <img className="image-resize" src={filteredShow.image} />
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
                    <div className=" text-rotate-left font-spacing-primary ">
                      AM
                    </div>
                  </div>
                </Col>
                <Col xs={6} className="py-3 px-0">
                  <div className="right-half">
                    <div className="text-rotate-right font-spacing-primary ">
                      PM
                    </div>
                  </div>
                </Col>
              </Row>

            </div>
          </Col>


          <Col >
            <div className="equal-height-content">
              {shows.filter(show => show.hour >= 12 && show.weekday === day).map
                (filteredShow => (
                  <Row className="show-row border-bottom-primary" key={filteredShow.hour}>
                    <Col >
                      <Row >
                        <div className="text-spacing-primary float-start bolder-text">
                          {filteredShow.showName}
                        </div>
                      </Row>
                      <Row>
                        <div className="text-spacing-secondary float-start">
                          With {filteredShow.dj}
                        </div>
                      </Row>
                    </Col>
                    <Col>
                      <div className="text-spacing-primary bolder-text">
                        {filteredShow.hour === 12 ? 12 : (filteredShow.hour % 12)}:00
                      </div>
                    </Col>

                    <img className="image-resize" src={filteredShow.image} />
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

