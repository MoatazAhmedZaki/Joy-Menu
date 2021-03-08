import React, { Component } from "react";
import "../../stylesheets/RestaurantDetailsPage.css";
import { Container } from "react-bootstrap";
import RestaurantCardDetails from "../restaurant/RestaurantCardDetails.js";
export default class RestaurantDetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="RestaurantDetailsPage py-5">
        <Container>
          <RestaurantCardDetails />
        </Container>
      </div>
    );
  }
}
