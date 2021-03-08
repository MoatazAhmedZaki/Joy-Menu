import React, { Component } from "react";
import "../../stylesheets/MyOrder.css";
import { Row} from "react-bootstrap";
// import DeliveryAddressCard from "../profile/DeliveryAddressCard";
import DeliveryAddress from "../profile/DeliveryAddress";
import Order from "../profile/Order";
import PaymentMethod from "../profile/PaymentMethod";
export default class MyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: true,
      DeliveryAddress: false,
      PaymentMethod: false,
    };
  }

  proceedToCheckout1 = (e) => {
    this.setState({ order: false, DeliveryAddress: true });
  };

  proceedToCheckout2 = (e) => {
    this.setState({
      order: false,
      DeliveryAddress: false,
      PaymentMethod: true,
    });
  };

  render() {
    return (
      <div className="MyOrder py-5">
        <div className="justify-content-around  align-items-end  d-flex order-statu text-center">
          <div
            className={
              "mx-4  " +
              (this.state.order ||
              this.state.DeliveryAddress ||
              this.state.PaymentMethod
                ? "active"
                : "")
            }
          >
            <p className=" stage-title  ">Order</p>

            <p className=" stage pt-2 ">
              <i class="fas fa-check"></i>
            </p>
          </div>
          <div
            className={
              "mx-4  " +
              (this.state.DeliveryAddress || this.state.PaymentMethod
                ? "active"
                : "")
            }
          >
            <p className=" stage-title    ">Delivery Address</p>

            <p className=" stage pt-2  ">
              {this.state.DeliveryAddress || this.state.PaymentMethod ? (
                <i class="fas fa-check"></i>
              ) : (
                2
              )}
            </p>
          </div>
          <div
            className={"mx-4  " + (this.state.PaymentMethod ? "active" : "")}
          >
            <p className=" stage-title ">Payment Method</p>

            <p className=" stage  pt-2   ">
              {" "}
              {this.state.PaymentMethod ? <i class="fas fa-check"></i> : 3}
            </p>
          </div>
        </div>
        <Row>
          {this.state.order ? (
            <Order fun={this.proceedToCheckout1} />
          ) : this.state.DeliveryAddress ? (
            <DeliveryAddress fun={this.proceedToCheckout2} />
          ) : this.state.PaymentMethod ? (
           <PaymentMethod/>
          ) : null}
        </Row>
      </div>
    );
  }
}
