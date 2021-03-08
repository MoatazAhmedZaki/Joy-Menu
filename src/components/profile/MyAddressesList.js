import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import MyAddressesItem from "./MyAddressesItem";

export default class MyAddressesList extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg={4} md={4} xs={12}>
            {" "}
            <MyAddressesItem />
          </Col>
          <Col lg={4} md={4} xs={12}>
            <MyAddressesItem />
          </Col>
          <Col sm={4} className=" ">
            <Button className="add-Address " variant="my">
              <h4>
                <i class="fas fa-plus"></i>
              </h4>

              <p> Add New Address</p>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
