import React, { Component } from "react";
import DeliveryAddressCard from "./DeliveryAddressCard";
import "../../stylesheets/DeliveryAddress.css";
import { Row, Col, Button, Modal } from "react-bootstrap";
import ChangeAddress from "../Auth/ChangeAddress";

export default class DeliveryAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeAddrees: false,
    };
  }

  handleShow = (e) => {
    this.setState({ changeAddrees: !this.state.changeAddrees });

    console.log(this.state);
  };

  render() {
    return (
      <Col lg={12} md={12} sm={12} className="my-address">
        <h1 className="py-5 px-3 my-order">Delivery Address</h1>

        <Row className="px-3 ">
          <Col sm={4} className="pb-3 ">
            <DeliveryAddressCard />
          </Col>

          <Col sm={4} className="pb-3 ">
            <DeliveryAddressCard />
          </Col>

          <Col sm={4} className="pb-3 ">
            <Button className="add-Address " onClick={this.handleShow}>
              <h4>
                <i class="fas fa-plus"></i>
              </h4>

              <p> Add New Address</p>
            </Button>
          </Col>
        </Row>

        <Button
          onClick={this.props.fun}
          className="w-75 payment-method-btn py-2 my-3"
        >
          Payment Method
        </Button>

        <Modal show={this.state.changeAddrees} onHide={this.handleShow}>
          <Modal.Body>
            <ChangeAddress />
          </Modal.Body>
        </Modal>
      </Col>
    );
  }
}
