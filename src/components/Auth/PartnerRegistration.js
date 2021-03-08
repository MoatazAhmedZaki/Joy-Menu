import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
export default class PartnerRegistration extends Component {
  render() {
    console.log(this.props);

    return (
      <Form className="SignIn-form">
        <Form.Row>
          <Col sm={12} className="mb-4">
            <Form.Control size="lg" placeholder="First name" />
          </Col>
          <Col sm={12} className="mb-4">
            <Form.Control size="lg" placeholder="Last name" />
          </Col>

          <Col sm={12} className="mb-4">
            <Form.Control size="lg" placeholder="Mobile Number" />
          </Col>

          <Col sm={12} className="mb-4">
            <Form.Control size="lg" placeholder="Email Address" />
          </Col>
        </Form.Row>

        <Row>
          <Button onClick={this.props.handle} className="signin-btn py-2">
            Next{" "}
          </Button>
        </Row>
      </Form>
    );
  }
}
