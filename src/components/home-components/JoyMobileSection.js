import React from "react";
import "../../stylesheets/JoyMobileSection.css";
import { Container, Row, Col } from "react-bootstrap";

export default function JoyMobileSection() {
  return (
    <section className="JoyMobileSection ">
      <Container>
        <Row className="col-rev">
          <Col lg={3} md={12} sm={12} className="mx-auto">
            <img
              className="img-fluid"
              src={require("../../imgs/JoyMob.png")}
              alt="Generic placeholder"
            />
          </Col>

          <Col lg={9} md={12} sm={12} className="mx-auto pt-5">
            <h2>Joy Menu in your mobile!</h2>
            <p>Get our app, it's the fastest way to order food on the go.</p>

            <Container>
              <Row>
                <Col md={3} sm={12}>
                  {" "}
                  <img
                    className="img-fluid"
                    src={require("../../imgs/iosBtn.png")}
                    alt="Generic placeholder"
                  />
                </Col>
                <Col md={3} sm={12}>
                  {" "}
                  <img
                    className="img-fluid"
                    src={require("../../imgs/googleBtn.png")}
                    alt="Generic placeholder"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
