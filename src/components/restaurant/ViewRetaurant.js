import React, { Component } from "react";
import { Row, Col, Container, Pagination } from "react-bootstrap";

import "../../stylesheets/ViewRetaurant.css";
export default class ViewRetaurant extends Component {
  render() {
    return (
      <div className="ViewRetaurant">
        <Container className="py-4">
          <Row>
            <Col lg={3} md={4} xs={12} className="mb-3 mx-auto text-center">
              <img
                className="img-fluid"
                src={require("../../imgs/desh.png")}
                alt="Generic placeholder"
              />
            </Col>

            <Col lg={3} md={4} xs={12} className="mb-3 mx-auto text-center">
              <img
                className="img-fluid"
                src={require("../../imgs/desh.png")}
                alt="Generic placeholder"
              />
            </Col>

            <Col lg={3} md={4} xs={12} className="mb-3 mx-auto text-center">
              <img
                className="img-fluid"
                src={require("../../imgs/desh.png")}
                alt="Generic placeholder"
              />
            </Col>

            <Col lg={3} md={4} xs={12} className="mb-3 mx-auto text-center">
              <img
                className="img-fluid"
                src={require("../../imgs/desh.png")}
                alt="Generic placeholder"
              />
            </Col>

            <Col lg={3} md={4} xs={12} className="mb-3 mx-auto text-center">
              <img
                className="img-fluid"
                src={require("../../imgs/desh.png")}
                alt="Generic placeholder"
              />
            </Col>

            <Col lg={3} md={4} xs={12} className="mb-3 mx-auto text-center">
              <img
                className="img-fluid"
                src={require("../../imgs/desh.png")}
                alt="Generic placeholder"
              />
            </Col>

            <Col lg={3} md={4} xs={12} className="mb-3 mx-auto text-center">
              <img
                className="img-fluid"
                src={require("../../imgs/desh.png")}
                alt="Generic placeholder"
              />
            </Col>

            <Col lg={3} md={4} xs={12} className="mb-3 mx-auto text-center">
              <img
                className="img-fluid"
                src={require("../../imgs/desh.png")}
                alt="Generic placeholder"
              />
            </Col>
          </Row>
        </Container>

        <Row>
          <Col md={4} xs={12} className="text-center">
            <p>
              <small>Showing 1-32 of 64 images </small>
            </p>
          </Col>

          <Col md={{ span: 4, offset: 4 }} xs={12}>
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>

              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>
      </div>
    );
  }
}
