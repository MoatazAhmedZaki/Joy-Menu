import React, { useEffect } from "react";
import { Row, Col, Nav, Tab, Container } from "react-bootstrap";
import "../../stylesheets/SingInPage.css";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
export default function SingInPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="SingInPage">
      <Container className="py-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="justify-content-center pb-5">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="mx-3">
                    sign in
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="mx-3">
                    Sign up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={6} sm={12} className="mx-auto">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Col sm={12} className="sign-card p-4">
                    <SignIn />
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Col sm={12} className="sign-card p-4">
                    <SignUp />{" "}
                  </Col>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
}
