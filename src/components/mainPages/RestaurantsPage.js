import React, { Component } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Pagination,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import RestaurantCard from "../restaurant/RestaurantCard";
import "../../stylesheets/RestaurantsPage.css";

export default class RestaurantsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="RestaurantsPage pb-5 ">
        <Container>
          <div className="search-bar  ">
            <div className="w-50">
              <Form className="w-100">
                <InputGroup className="py-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      <i class="fas fa-search"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Search Restaurant"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form>
            </div>
          </div>

          <Row>
            {this.state.data.map((card) => {
              return (
                <Col lg={2} md={4} sm={4}>
                  <RestaurantCard />
                </Col>
              );
            })}
          </Row>

          <div>
            <Pagination className="p-0 py-4">
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Container>
      </div>
    );
  }
}
