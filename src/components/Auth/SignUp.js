import React, { Component } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
} from "react-bootstrap";
// import { Redirect } from "react-router-dom";

export default class SignUp extends Component {
  // handelSignUp=()=>{

  //   this.props.history.push('/ver')

  // }
  render() {
    return (
      <Form className="SignIn-form">
        <Form.Row>
          <Col md={6} sm={12} className="mb-4">
            <Form.Control size="lg" placeholder="First name" />
          </Col>
          <Col md={6} sm={12} className="mb-4">
            <Form.Control size="lg" placeholder="Last name" />
          </Col>

          <Col md={12} sm={12} className="mb-4">
            <InputGroup>
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-describedby="basic-addon1" size="lg" />
            </InputGroup>
          </Col>

          <Col sm={12} className="mb-4">
            <Form.Control size="lg" placeholder="email" />
          </Col>

          <Col sm={12} className="mb-4">
            <Form.Control size="lg" placeholder="Password" />
          </Col>

          <Col sm={12} className="mb-2">
            <Form.Control size="lg" placeholder="confirm password" />
          </Col>

          <Col sm={12} className="my-2">
            <p>
              {" "}
              <small>
                By creating an account, you agree to receive sms from vendor.
              </small>
            </p>
          </Col>
        </Form.Row>

        <Row>
          <Button className="signin-btn py-2">create account </Button>
        </Row>

        <p className="text-center pt-3">Or Continue sign up with</p>

        <Col md={6} sm={12} className="mx-auto">
          <Button className="mx-auto mb-2 facebook-btn">
            {" "}
            <i class="fab fa-facebook-square"></i> Login With Facebook
          </Button>
        </Col>

        <Col md={6} sm={12} className="mx-auto">
          <Button className="mx-auto mt-2  google-btn">
            {" "}
            <i class="fab fa-google-plus-g"></i> Login With Google
          </Button>
        </Col>
      </Form>
    );
  }
}
