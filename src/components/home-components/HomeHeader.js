import React, { Component } from "react";
import "../../stylesheets/HomeHeader.css";
import { Form, Col, Button } from "react-bootstrap";
export default class HomeHeader extends Component {
  render() {
    return (
      <header id="header" class=" d-flex  text-center py-5">
        <div class="row align-self-center w-100 pl-3 align-items-center justify-content-center">
          <div class="mx-auto  col-lg-6 col-sm-12  z-all">
            <div class="intro">
              <h2>Discover the joy of food & drinks</h2>

              <Form className="p-4">
                <Form.Row>
                  <Form.Group
                    as={Col}
                    lg={5}
                    md={12}
                    sm={12}
                    controlId="formGridEmail"
                    className="my-2"

                  >
                    <Form.Control type="text" placeholder="City/ area/ near me" />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={5}
                    md={12}
                    sm={12}
                    className="my-2"

                    controlId="formGridPassword"
                  >
                    <Form.Control type="text" placeholder="Restaurant, cuisine, a dish" />
                  </Form.Group>
                  <Form.Group
                   as={Col} lg={2} md={12} sm={12}
                   className="my-2"
                  >
                  <Button  class="search-btn">
                    Search <i class="fas fa-search"></i>
                  </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
