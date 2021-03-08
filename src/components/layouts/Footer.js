import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../stylesheets/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="pt-3">
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12} className="py-3">
              <h6>Company</h6>
              <Link to="/AboutUs">About Us</Link>
              <Link to="/">Prices</Link>
              <Link to="/">Terms of Use</Link>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </Col>
            <Col lg={3} md={3} sm={12} className="py-3">
              <h6>Support</h6>
              <Link to="/">Help</Link>
              <Link to="/ContactUs">Contact Us</Link>
            </Col>

            <Col lg={3} md={3} sm={12} className="py-3">
              <h6>Get Social</h6>
              <Link to="/">Facebook</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">YouTube</Link>
              <Link to="/">Instagram</Link>
            </Col>
            <Col lg={3} md={3} sm={12} className="py-3">
              <h6 className="pb-3">Subscribe to our newsletter</h6>

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button>OK</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Container>

        <p className="text-center py-3 border-top mt-2">
          <small> © Joy Menu 2020, All Rights Reserved. </small>
        </p>
      </footer>
    );
  }
}
