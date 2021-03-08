import React from 'react'
import { Row, Col } from "react-bootstrap";
import MenuItem from "./MenuItem";

export default function Offers() {
    return (
        <div className="p-5">
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
            
        </div>
    )
}
