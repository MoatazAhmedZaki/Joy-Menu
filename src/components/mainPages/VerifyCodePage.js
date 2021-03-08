import React, { Component } from "react";
import VerifyCode from "../Auth/VerifyCode";
import { Container, Col } from "react-bootstrap";
import "../../stylesheets/VerifyCodePage.css";
export default class VerifyCodePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="py-5 VerifyCodePage">
        <Container>
          <h2 className="text-center verify-tilte py-4 ">
            verify your mobile number
          </h2>

          <Col lg={5} className="mx-auto">
            <VerifyCode />
          </Col>
        </Container>
      </div>
    );
  }
}
