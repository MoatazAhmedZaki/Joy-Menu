import React from "react";
import "../../stylesheets/BrowseSection.css";
import { Col, Container, Row } from "react-bootstrap";
export default function BrowseSection() {
  return (
    <div className="BrowseSection py-5 ">
      <Container>
        <h2 className="text-center">
          <span> Browse by</span> Cuisine
        </h2>
        <p className="text-center sub-title">
          choose from your favorite cuisine
        </p>

        <Row className="py-5">
          <Col lg={3} md={6} sm={12}>
            <p>Barbeque (26)</p>
            <p>Middle Eastern (13)</p>
            <p>American (29)</p>
            <p>Deli (17)</p>
            <p>Indian (38)</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <p> Mediterranean (21)</p>
            <p>Sandwiches (26)</p>
            <p>Japanese (4)</p>
            <p>Diner (15)</p>
            <p>Italian (20)</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <p> Mexican (6)</p>
            <p>Sushi (2)</p>
            <p>Burgers (7)</p>
            <p>Greek (2)</p>
            <p>Vegetarian (2)</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <p> Thai (5)</p>
            <p>cscs (2)</p>
            <p>Chinese (5)</p>
            <p>Healthy (7)</p>
            <p>Korean (3)</p>
            <p>Pizza (23)</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
