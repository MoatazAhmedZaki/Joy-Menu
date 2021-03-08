import React from "react";
import "../../stylesheets/JoinUsSection.css";
import { Col, Container, Button } from "react-bootstrap";

export default function JoinUsSection() {
  return (
    <div className="JoinUsSection py-5 text-center">
      <Container>
        <h2>
          <span> Join </span> Us
        </h2>
        <p >Be A Part Of The Joy Menu Story</p>

        <Col lg={6} md={12} sm={12} className="mx-auto joinUs-card p-4">
          <p className="handshake-icon">
            <i class="far fa-handshake fa-4x"></i>
          </p>
          <h3>Become a partner</h3>

          <p>Reach more customers and achieve growth with us</p>

          <Button className="show-More-btn">MORE</Button>
        </Col>
      </Container>
    </div>
  );
}
