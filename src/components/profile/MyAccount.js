import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../../stylesheets/MyAccount.css";
export default class MyAccount extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={6} xs={12}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                {" "}
                <i class="fas fa-envelope mx-1"></i> Email address
              </Form.Label>
              <Form.Control type="email" placeholder="(0000@gmail.com)" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                {" "}
                <i class="fas fa-phone mx-1"></i> Phone
              </Form.Label>
              <Form.Control type="number" placeholder="+977 000 0000" />
            </Form.Group>
          </Col>

          <Col md={6} xs={12}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                {" "}
                <i class="fas fa-lock mx-1"></i> Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Old Password"
                className="mb-3"
              />
              <Form.Control
                type="password"
                placeholder="New Password"
                className="mb-3"
              />
              <Form.Control
                type="password"
                placeholder="Renew Password"
                className="mb-3"
              />
            </Form.Group>
          </Col>

          <Button
            varient="my"
            className="w-50 update-profile  py-2 mx-4"
            onClick={this.props.fun}
          >
            update profile{" "}
          </Button>
        </Row>
      </div>
    );
  }
}
