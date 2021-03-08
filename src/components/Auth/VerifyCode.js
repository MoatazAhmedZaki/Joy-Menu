import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
//   import "../../stylesheets/SignIn.css";
import "../../stylesheets/VerifyCode.css";

export default class VerifyCode extends Component {
  render() {
    return (
      <div className=" VerifyCode p-3">
        <div className="pt-4">
          <p className="w-75 mx-auto pt-3 main-form-text text-center ">
            we sent you a code to verfiy your phone number please enter below
            the code that was sented to your phone to verfiy your account{" "}
          </p>
        </div>

        <Form className="py-4">
          <Form.Row>
            <Col xs={3}>
              <Form.Control
                className=""
                id="inlineFormInputName2"
                placeholder=""
                type="number"
              />
            </Col>
            <Col xs={3}>
              <Form.Control
                className=""
                id="inlineFormInputName2"
                placeholder=""
                type="number"
              />
            </Col>
            <Col xs={3}>
              <Form.Control
                className=""
                id="inlineFormInputName2"
                placeholder=""
                type="number"
              />
            </Col>
            <Col xs={3}>
              <Form.Control
                className=""
                id="inlineFormInputName2"
                placeholder=""
                type="number"
              />
            </Col>
          </Form.Row>
        </Form>

        <Row>
          <Button className="signin-btn py-2 w-75 mx-auto mt-3 my-3">
            verfiy
          </Button>
        </Row>

        <p className=" mb-0 resend-text">
          <small className="px-1 forget-btn ">i Did't Recieve A Code ! </small>
        </p>

        <a href="/" className="resend-btn">
          <small className="px-1  "> Resend </small>
        </a>
      </div>
    );
  }
}
