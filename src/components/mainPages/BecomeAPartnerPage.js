import React, { Component } from "react";
import "../../stylesheets/SingInPage.css";
import "../../stylesheets/BecomeAPartner.css";

import { Row, Col, Container } from "react-bootstrap";
import PartnerRegistration from "../Auth/PartnerRegistration";
import ShopRegistration from "../Auth/ShopRegistration";
export default class BecomeAPartner extends Component {
  constructor(props) {
    super(props);
    this.state = { your: true };
  }

  show = () => {
    this.setState({ your: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="SingInPage BecomeAPartner">
        <Container className="py-5">
          <h2 className="pb-3"> Join Us Today!</h2>
          <hr />
          <Col md={6} sm={12} className="mx-auto pt-3">
            <Row>
              <Col sm={6} className=" p-4 text-center">
                <p className={"navtab " + (this.state.your ? "active" : "")}>
                  your details
                </p>
              </Col>
              <Col sm={6} className=" p-4">
                <p className={"navtab " + (this.state.your ? "" : "active")}>
                  store details
                </p>
              </Col>
            </Row>

            {this.state.your ? (
              <Col sm={12} className="sign-card p-4">
                <PartnerRegistration handle={this.show} />
              </Col>
            ) : (
              <Col sm={12} className="sign-card p-4">
                <ShopRegistration />
              </Col>
            )}
          </Col>
        </Container>
      </section>
    );
  }
}
