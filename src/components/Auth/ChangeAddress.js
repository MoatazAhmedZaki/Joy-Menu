import React, { Component } from 'react'
import {
    Form,
    Button,
    Row,
    Col
  } from "react-bootstrap";
export default class ChangeAddress extends Component {
    render() {
        return (
            <Form className="SignIn-form">
            <Form.Row>
              <Col md={12} sm={12} className="mb-4">
                <Form.Control size="lg" placeholder="Name" />
              </Col>
              <Col md={12} sm={12} className="mb-4">
                <Form.Control size="lg" placeholder="Address" />
              </Col>
              <Col md={12} sm={12} className="mb-4">
                <Form.Control size="lg" placeholder="Regoin or Buliding or Apartment" />
              </Col>
    
    
              <Col md={12} sm={12} className="mb-4">

              <Form.Control as="select" size="lg" >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </Col>

    
    
    <Col md={12} sm={12} className="mb-4">

<Form.Control as="select" size="lg" >
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</Form.Control>
</Col>

            </Form.Row>
    
            <Row>
              <Button type="submit" className="signin-btn py-2">
              save & continue              </Button>
            </Row>
          </Form>
        )
    }
}
