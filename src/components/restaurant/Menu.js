import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <Tab.Container id="sub-menu" defaultActiveKey="first">
      <Nav variant="pills" className="justify-content-start  align-items-center   sub-menu">
        <Nav.Item>
          <Nav.Link eventKey="first">breakfast</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">lunch</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">dinner</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">main course</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">apitizer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6">desserts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-7">drinks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">catering</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />

      <Tab.Content className="p-5">
        <Tab.Pane eventKey="first">
          <h2 className="py-4">Breakfast</h2>

          <Row>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>

            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>

            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>

            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>

            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h2 className="py-4">Lunch</h2>
          <Row>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>

            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>

            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>

            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>

            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <MenuItem />{" "}
            </Col>
          </Row>{" "}
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
