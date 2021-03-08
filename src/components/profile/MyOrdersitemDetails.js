import React, { Component } from "react";
import "../../stylesheets/MyOrdersitemDetails.css";
import { Container, Col, Row, Button, Modal, Form } from "react-bootstrap";
export default class MyOrdersitemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cancel: false,
    };
  }

  handleCancel = () => {
    this.setState({ Cancel: !this.state.Cancel });
  };

  render() {
    return (
      <div className="MyOrdersitemDetails py-5">
        <Container>
          <h2 className="pb-5">
            Order NO. <span className="mx-4">255368</span>
          </h2>
          <div className="holder py-4 px-3">
            <Row>
              {" "}
              <Col lg={3} md={3} xs={12}>
                <h3 className="">Order Status</h3>

                <p className="order-status">New</p>
              </Col>
              <Col lg={3} md={3} xs={12}>
                <h3>Order Date</h3>

                <p>
                  {" "}
                  <i class="fas fa-clock"></i> <span> 1/7/2020</span>
                </p>
              </Col>
              <Col lg={3} md={3} xs={12}>
                <h3>Payment Method</h3>

                <p> Cash on Delivery</p>
              </Col>
              <Col lg={3} md={3} xs={12}>
                <h3>Total Order</h3>

                <p> 91 AED</p>
              </Col>
            </Row>

            <hr />

            <div className="d-flex justify-content-between  ">
              <div>
                <p>
                  QTY. <span>2</span>
                </p>
              </div>

              <div>
                <Button
                  className="cancel-order-btn"
                  variant="my"
                  onClick={this.handleCancel}
                >
                  Cancel Order
                </Button>
              </div>
            </div>

            <hr />

            <Row className="px-3 ">
              <Col
                sm={6}
                className="pb-3 d-flex justify-content-between align-items-center "
              >
                <p className=" item-name mb-0 ">Bydina (Regular)</p>
                <p className=" item-price mb-0  ">42.00 AUD</p>
              </Col>

              <Col sm={6} className="pb-3 text-center">
                <p>
                  QTY. <span>2</span>
                </p>
              </Col>
            </Row>
            <Row className="px-3 ">
              <Col
                sm={6}
                className="pb-3 d-flex justify-content-between align-items-center "
              >
                <p className=" item-name mb-0">Bydina (Regular)</p>
                <p className=" item-price mb-0 ">42.00 AUD</p>
              </Col>

              <Col sm={6} className="pb-3 text-center">
                <p>
                  QTY. <span>2</span>
                </p>
              </Col>
            </Row>

            <hr />

            <div className="  d-flex justify-content-between align-items-center  px-5 ">
              <p className=" fees">Sub Total</p>
              <p className="  fees">84.00 AUD</p>
            </div>

            <div className=" px-5 d-flex justify-content-between align-items-center">
              <p className="fees">Service Charge</p>
              <p className=" fees">7.00 AUD</p>
            </div>

            <div className=" px-5 d-flex justify-content-between align-items-center">
              <p className=" fees">Tax fees</p>
              <p className=" fees ">4.00 AUD</p>
            </div>

            <div className=" px-5 d-flex justify-content-between align-items-center">
              <p className=" fees total-fees">Total</p>
              <p className=" fees total-fees">95.00 AUD</p>
            </div>
          </div>
        </Container>

        <Modal show={this.state.Cancel} onHide={this.handleCancel}>
          <Modal.Body>
            <p className="text-center">Cancel Order</p>
            <hr />

            <Container>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Cancel Order Reason </Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Text id="passwordHelpBlock">
                  Please note that order takes only 15 MIn to Cancel
                </Form.Text>

                <Button variant="my" className="cancel-modal-btn mt-3">
                  Cancel order
                </Button>
              </Form.Group>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
