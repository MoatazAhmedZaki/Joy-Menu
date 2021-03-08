import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import {Link} from "react-router-dom"
import { NavLink } from "react-router-dom";

import "../../stylesheets/NavB.css";

import { connect } from "react-redux";
import { changeLang } from "../../store/actions/changeLang";
const text = require("../../localization/NavB.json");

class NavB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  changeLang = (e) => {
    e.preventDefault();
    if (e.target.id === "AR") {
      this.setState({ text: text.AR });
    } else if (e.target.id === "EN") {
      this.setState({ text: text.EN });
    }
    this.props.changeLang(e.target.id);
  };

  componentWillMount() {
    if (this.props.lan === "AR") {
      this.setState({ text: text.AR });
    } else {
      this.setState({ text: text.EN });
    }
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img
              src={require("../../imgs/Logo.png")}
              alt=" Joy Logo"
              className="img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={
                " " + (this.state.text === text.EN ? "mr-auto" : "ml-auto")
              }
            >
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeStyle={{
                  color: "#f8901a",
                }}
              >
                {this.state.text.HomeLink}
              </NavLink>
              <NavLink
                className="nav-link"
                exact
                to="/Restaurant"
                activeStyle={{
                  color: "#f8901a",
                }}
              >
                {this.state.text.AllRestaurantLink}
              </NavLink>
              <NavLink
                className="nav-link"
                exact
                to="/Offers"
                activeStyle={{
                  color: "#f8901a",
                }}
              >
                {this.state.text.OffersLink}
              </NavLink>

              <NavLink
                className="nav-link"
                exact
                to="/BecomeAPartner"
                activeStyle={{
                  color: "#f8901a",
                }}
              >
                {this.state.text.BecomeAPartnerLink}
              </NavLink>
            </Nav>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            <Nav
              className={
                " " + (this.state.text === text.EN ? "ml-auto" : "mr-auto")
              }
            >
              <NavLink
                className="nav-link"
                exact
                to="/SignIn"
                activeStyle={{
                  color: "#f8901a",
                }}
              >
                <i className="far fa-user-circle"></i> {this.state.text.Login}
              </NavLink>
          
              {/* <Nav.Link href="#link6">العربية</Nav.Link> */}

              {this.props.lan === "EN" ? (
                <a
                  href="/"
                  id="AR"
                  className="nav-link"
                  onClick={this.changeLang}
                >
                               <i className="fas fa-globe-africa px-2"></i>
 العربية
                </a>
              ) : (
                <a
                  href="/"
                  id="EN"
                  className="nav-link"
                  onClick={this.changeLang}
                >
                               <i className="fas fa-globe-africa px-2"></i>
   EN 
                </a>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  // console.log("ownprops");

  // console.log(ownprops);
  return {
    lan: state.lan,
    // posts:state.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (lan) => {
      dispatch(changeLang(lan));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavB);
