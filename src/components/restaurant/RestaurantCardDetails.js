import React from "react";
import "../../stylesheets/RestaurantCardDetails.css";
import { Row, Col, Button, Nav, Tab } from "react-bootstrap";
import Menu from "./Menu";
import MyMenu from "../order/MyMenu.js";
import Offers from "./Offers";
import ViewRetaurant from "./ViewRetaurant";
export default function RestaurantCardDetails() {
  return (
    <div className="RestaurantCardDetails">
      <section className="upper py-3">
        <Row>
          <Col lg={2} sm={12} className="">
            {" "}
            <img
              className="img-fluid rounded"
              src={require("../../imgs/rest2.png")}
              alt="Generic placeholder"
            />
          </Col>
          <Col lg={7} sm={12}>
            <h2 className="rest-name pt-3">basa omar</h2>
            <p className="rest-type">
              <small>Turkish, Breakfast, Grills</small>
            </p>

            <p className="rest-location">
              <i class="fas fa-map-marker-alt px-2"></i> Box No. 56123 , Dubai ,
              Emirates
            </p>

            <p className="rest-hour">
              <i class="far fa-clock px-2"></i> Open Hours : 5 AM - 10 PM
            </p>

            <p className="rest-distance">
              <i class="fas fa-map px-2"></i> Distance : 3 KM
            </p>
          </Col>
          <Col lg={3} sm={12} className="text-center ">
            <p className="py-3 icons">
              {" "}
              <i class="fas fa-heart px-3"></i>{" "}
              <i class="fas fa-phone px-3"></i>{" "}
              <i class="fas fa-share-alt px-3"></i>
            </p>

            <Button className="px-5">Follow</Button>
          </Col>
        </Row>
      </section>

      <section className="">
        {/* <Nav className="justify-content-start" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <ul>
          {" "}
          <li>breakfast</li> <li>lunch</li> <li>dinner</li> <li>main course</li>{" "}
          <li>apitizer</li> <li>desserts</li> <li>drinks</li> <li>catering </li>
        </ul> */}
        <Row className="column-reverse">
          <Col lg={8} md={12} sm={12} className="lower">
            {" "}
            <Tab.Container id="sub-menu" defaultActiveKey="first1">
              <Nav
                variant="pills"
                className="justify-content-start   align-items-center  main-menu"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first1">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second2">Offers </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second3" className="mymenu" number="1">
                    My Menu 
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second4">View restaurant</Nav.Link>
                </Nav.Item>
              </Nav>
              <hr className="m-0" />
              <Tab.Content>
                <Tab.Pane eventKey="first1">
                  <Menu />
                </Tab.Pane>
                <Tab.Pane eventKey="second2">
                  <Offers />{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="second3">
                  <MyMenu />{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="second4">
                  <ViewRetaurant />{" "}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>{" "}
          </Col>

          <Col lg={4} md={12} sm={12} className="mb-3">
            <div className="lower2  py-3 ">
              <h2 className="px-4 ">Your Card (2)</h2>
              <div className="p-2 text-center d-flex justify-content-between align-items-center  ">
                <p className="mb-0 mx-1 item-name">Bydina (Regular)</p>

                <p className=" mb-0 0 mx-1  item-price">42.00 AUD</p>
                <Button className="  exit-btn 0 mx-1 ">
                  <i class="fas fa-times-circle"></i>
                </Button>
              </div>

              <div className="p-2 text-center d-flex justify-content-between align-items-center  ">
                <p className="mb-0 mx-1 item-name">Bydina (Regular)</p>

                <p className=" mb-0 0 mx-1 item-price ">42.00 AUD</p>
                <Button className="  exit-btn 0 mx-1 ">
                  <i class="fas fa-times-circle"></i>
                </Button>
              </div>

              <hr />

              <div className=" p-2 text-center d-flex justify-content-between align-items-center px-4">
                <p className="mb-0 fees">Sub Total</p>

                <p className=" mb-0 fees ">42.00 AUD</p>
              </div>

              <div className=" p-2 text-center d-flex justify-content-between align-items-center px-4">
                <p className="mb-0 fees">Service Charge</p>

                <p className=" mb-0 fees">42.00 AUD</p>
              </div>

              <div className=" p-2 text-center d-flex justify-content-between align-items-center px-4">
                <p className="mb-0 fees">Tax fees</p>

                <p className=" mb-0 fees ">42.00 AUD</p>
              </div>

              <div className=" p-2 text-center d-flex justify-content-between align-items-center px-4">
                <p className="mb-0  fees total-fees">Total</p>

                <p className=" mb-0 fees total-fees ">95.00 AUD</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
