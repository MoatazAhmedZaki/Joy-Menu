import React, { Component } from "react";
import "../../stylesheets/MyOrdersitem.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class MyOrdersitem extends Component {
  render() {
    return (
      <div className="orderHistoryItem ">
        <div className="">
          <div className=" d-flex justify-content-between w-100 ">
            <div className="w-75">
              <h2>
                Order NO. <span className="mx-3">255368</span>{" "}
              </h2>
              <Row>
                {" "}
                <Col md={4} xs={12}>
                  <p>
                    Total <span>91 AED</span>
                  </p>
                </Col>
                <Col md={4} xs={12}>
                  <p>
                    QTY. <span>2</span>
                  </p>
                </Col>
                <Col md={4} xs={12}>
                  <p>
                    {" "}
                    <i class="fas fa-clock"></i> <span> 1/7/2020</span>
                  </p>
                </Col>
              </Row>
            </div>

            <div className=" text-center w-25 ">
              <p className="history-type my-2  mx-auto ">New</p>
              <Link to="/Order/id" className="order-details-btn ">Details</Link >
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
