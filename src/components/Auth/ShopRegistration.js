import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

export default function ShopRegistration() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <Form className="SignIn-form ">
      <Form.Row>
        <Col sm={12} className="mb-4">
          <Form.Control size="lg" placeholder="Shop Name" />
        </Col>
        <Col sm={12} className=" mx-3">
          <p>Store Location</p>
        </Col>

        <Col sm={6} className="mb-4">
          <Form.Control as="select" size="lg">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>{" "}
        </Col>

        <Col sm={6} className="mb-4">
          <Form.Control size="lg" placeholder="City" />
        </Col>

        <Col sm={12} className="mb-4">
          <Form.Control size="lg" placeholder="Website / Social media" />
        </Col>

        <Col sm={8} className="mb-4">
          <p>Does your store do its own delivery?</p>
        </Col>
        <Col sm={4} className="mt-1">
          <Form.Check type="switch" id="custom-switch" label="" />
        </Col>

        <Row className="w-100 mx-auto mb-4">
          <ReCAPTCHA
            sitekey="Your client site key"
            onChange={onChange}
            className="myre mx-auto px-auto"
          />
        </Row>
      </Form.Row>

      <Row>
        <Button className="signin-btn py-2">Join us now </Button>
      </Row>
    </Form>
  );
}
