import React, { Component } from "react";
import OfferCard from "../offer/OfferCard";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import "../../stylesheets/OffersPage.css";

export default class OffersPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [1, 2, 3, 4, 5, 6] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="OffersPage py-5 ">
        <Container>
          <Row>
            {this.state.data.map((card) => {
              return (
                <Col lg={3} md={6} sm={6}>
                  <OfferCard />
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
