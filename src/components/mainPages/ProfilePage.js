import React, { Component } from "react";
import { Container, Row, Col, Nav, Tab, Button } from "react-bootstrap";
import "../../stylesheets/ProfilePage.css";
import MyOrdersList from "../profile/MyOrdersList";
import MyNotificationsList from "../profile/MyNotificationsList";
import MyAddressesList from "../profile/MyAddressesList";
import MyAccount from "../profile/MyAccount";
import MyFollowingList from "../profile/MyFollowingList";

export default class ProfilePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="ProfilePage pt-5">
        <Container>
          <Row className="mb-4">
            <Col lg={2} md={4} xs={12} className="text-center">
              <img
                className="img-fluid mx-auto rounded"
                src={require("../../imgs/Logo.png")}
                alt="Generic placeholder"
              />
            </Col>

            <Col lg={10} md={9} xs={12}>
              <h2 className="profile-name">Hossam Abdullah</h2>
              <p className="profile-location">Dubai , Emirates</p>

              <Button variant="my" className="profile-logout-btn">
                {" "}
                <i class="fas fa-power-off"></i> Log Out
              </Button>
            </Col>
          </Row>

          {/* <Media className="px-4 pt-4">
                    <Button className="upload-btn rounded-circle">
                      <i class="fas fa-camera"></i>
                    </Button>
                    <img
                      width={64}
                      height={64}
                      className="ml-3 rounded-circle "
                      src={require("../../imgs/Logo.png")}
                      alt="Generic placeholder"
                    />
                    <Media.Body className="text-right">
                      <h5 className="profile-name">قاسم الماجدى </h5>
                      <Button className="logout-btn">خروج</Button>
                      <div className="display-inline-block">
                        <div className="w-75 pl-3">
                          <p className="plan-type"> الباقة الاساسية </p>
                        </div>
                        <div className="w-25">
                          <Button className="upgd-btn">ترقية</Button>
                        </div>
                      </div>
                    </Media.Body>
                  </Media>
                  <hr />
 */}

          <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col
                  sm={3}
                  className="setting-holder1 setting-holder p-0 mb-4 "
                >
                  <Nav variant="pills" className="flex-column  ">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <i class="fas fa-file  px-2"></i> My Orders
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="second"
                        className="d-flex justify-content-between"
                      >
                        <div>
                          <i class="fas fa-bell px-2"></i> Notifications
                        </div>
                        <div className="noti-numb ">5</div>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="3">
                        <i class="fas fa-map-marker-alt  px-2"></i> Addresses
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="4">
                        <i class="fas fa-user  px-2"></i> My Account
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="5">
                        <i class="fas fa-users  px-2"></i> Following
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} className="mb-4">
                  <Tab.Content className=" setting-holder  py-4 container">
                    <Tab.Pane eventKey="first">
                      <MyOrdersList />{" "}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <MyNotificationsList />{" "}
                    </Tab.Pane>

                    <Tab.Pane eventKey="3">
                      <MyAddressesList />
                    </Tab.Pane>

                    <Tab.Pane eventKey="4">
                      <MyAccount />
                    </Tab.Pane>
                    <Tab.Pane eventKey="5">
                      <MyFollowingList />{" "}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </div>
    );
  }
}
