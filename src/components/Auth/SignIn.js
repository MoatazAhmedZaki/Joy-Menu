import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../../stylesheets/SignIn.css";

export default class SignIn extends Component {
  render() {
    return (
      <Form className="SignIn-form">
        <div className="pb-3">
          <Col md={6} sm={12} className="mx-auto">
            <Button className="mx-auto my-2 facebook-btn">
              {" "}
              <i class="fab fa-facebook-square"></i> Login With Facebook
            </Button>
          </Col>

          <Col md={6} sm={12} className="mx-auto">
            <Button className="mx-auto mt-2 mb-3 google-btn">
              {" "}
              <i class="fab fa-google-plus-g"></i> Login With Google
            </Button>
          </Col>

          <hr className="or-hr " />
        </div>

        <Form.Group controlId="formBasicEmail">
          <Form.Control  size="lg" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control  size="lg" type="password" placeholder="Password" />
        </Form.Group>
        <p>
          <small className="px-1 forget-btn">forget password ?</small>
        </p>
        <Row>
          <Button type="submit" className="signin-btn py-2">
            Login
          </Button>
        </Row>
      </Form>
    );
  }
}
