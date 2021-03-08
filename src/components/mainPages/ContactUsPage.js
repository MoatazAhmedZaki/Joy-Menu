import React, { useEffect } from "react";
import "../../stylesheets/ContactUsPage.css";
import { Container, Col, Form, Button } from "react-bootstrap";
export default function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ContactUsPage pb-5">
      <h1 className=""> Contact Us </h1>

      <Col sm={4} className="mx-auto  text-center Contactform py-5 my-5">
        <Container>
          <h2>How may we help you?</h2>
          <p>
            Our agents are available 24x7 to make sure that all your issues and
            inquiries are resolved.
          </p>
          <Col lg={9} md={12} sm={12} className="mx-auto ">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="email"
                  placeholder="Email
"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Phone " />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder="Message
"
                />
              </Form.Group>

              <Button type="submit">SEND</Button>
            </Form>
          </Col>
        </Container>
      </Col>
    </div>
  );
}
