import React, { Component } from 'react'
import { Row, Col,  Button, Form } from "react-bootstrap";


export default class Order extends Component {
    render() {
        return (
      <Col lg={10} md={12} sm={12}>
            <h1 className="py-5 px-3 my-order">Your Order</h1>

            <Row className="px-3 ">
              <Col
                sm={6}
                className="pb-3 d-flex justify-content-between align-items-center "
              >
                <p className=" item-name mb-0 ">Bydina (Regular)</p>
                <p className=" item-price mb-0  ">42.00 AUD</p>
              </Col>

              <Col sm={6} className="pb-3 text-center">
                <div className="add-remove-btn d-inline-block">
                  <Button className="d-inline-block">
                    <i class="fas fa-minus-circle"></i>
                  </Button>
                  <p className="d-inline-block px-3 mb-0"> 1</p>
                  <Button className="d-inline-block">
                    <i class="fas fa-plus-circle"></i>
                  </Button>
                </div>

                <Button className="d-inline-block mx-3 exit-btn ">
                  <i class="fas fa-times-circle"></i>
                </Button>
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
                <div className="add-remove-btn d-inline-block">
                  <Button className="d-inline-block">
                    <i class="fas fa-minus-circle"></i>
                  </Button>
                  <p className="d-inline-block px-3 mb-0"> 1</p>
                  <Button className="d-inline-block">
                    <i class="fas fa-plus-circle"></i>
                  </Button>
                </div>

                <Button className="d-inline-block mx-3 exit-btn ">
                  <i class="fas fa-times-circle"></i>
                </Button>
              </Col>
            </Row>

            <hr />

            <div className="px-3  d-flex justify-content-between align-items-center  ">
              <p className=" fees">Sub Total</p>
              <p className="  fees">84.00 AUD</p>
            </div>

            <div className="px-3 d-flex justify-content-between align-items-center">
              <p className="fees">Service Charge</p>
              <p className=" fees">7.00 AUD</p>
            </div>

            <div className="px-3 d-flex justify-content-between align-items-center">
              <p className=" fees">Tax fees</p>
              <p className=" fees ">4.00 AUD</p>
            </div>

            <div className="px-3 d-flex justify-content-between align-items-center">
              <p className=" fees total-fees">Total</p>
              <p className=" fees total-fees">95.00 AUD</p>
            </div>

            <Form.Group
              controlId="formBasicPassword"
              className="add-comment-order"
            >
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Add Notes
"
              />
            </Form.Group>

            <Button className="w-75 proceed-to-checkout-btn py-2" onClick={this.props.fun}>
              proceed to checkout
            </Button>
          </Col> 

        )
    }
}
