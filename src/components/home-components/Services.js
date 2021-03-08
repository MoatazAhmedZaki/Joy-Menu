import React from "react";
import "../../stylesheets/Services.css";
import { Container, Row, Col } from "react-bootstrap";
export default function Services() {
  return (
    <section className="Services text-center py-5">
      <Container>
        <h2>
          <span>Get Your Favorite </span>
          <br />
          Food or Drinks
        </h2>

        <p>
          <small>IN SIMPLE STEPS</small>
        </p>

        <Row className="py-4">
          <Col lg={3} md={12} sm={12} className="align-self-stretch">
            <img
              alt="search icon"
              src={require("../../imgs/spoon.png")}
              className="img-fluid py-3"
            />

            <h3 className="pt-2">Search</h3>
            <p>
              for a restaurant <br /> cuisine or a dish
            </p>
          </Col>

          <Col lg={3} md={12} sm={12} className="align-self-stretch">
            <img
              alt="search icon"
              src={require("../../imgs/rice.png")}
              className="img-fluid py-3"
            />

            <h3 className="pt-3">Choose</h3>
            <p>Browse hundreds of menus to find the food you like</p>
          </Col>

          <Col lg={3} md={12} sm={12} className="align-self-stretch">
            <img
              alt="search icon"
              src={require("../../imgs/bank.png")}
              className="img-fluid py-3"
            />

            <h3 className="pt-2">Pay</h3>
            <p>
              It's quick
              <br /> secure and easy
            </p>
          </Col>

          <Col lg={3} md={12} sm={12} className="align-self-stretch">
            <img style={{width:"81px" ,height:"113px"}}
              alt="search icon"
              src={require("../../imgs/enjoy.png")}
              className="img-fluid pb-4"
            />

            <h3 className="pt-2">Enjoy</h3>
            <p>
              enjoy your food dine in
              <br /> delivery or pickup
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
