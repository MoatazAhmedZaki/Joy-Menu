import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import MyFollowingItem from "./MyFollowingItem";

export default class MyFollowingList extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg={3} md={3} xs={12}>
            <MyFollowingItem />
          </Col>
          <Col lg={3} md={3} xs={12}>
            <MyFollowingItem />
          </Col>

          <Col lg={3} md={3} xs={12}>
            <MyFollowingItem />
          </Col>
        </Row>
      </div>
    );
  }
}
