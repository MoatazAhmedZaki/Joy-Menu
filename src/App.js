import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import { Route ,HashRouter } from "react-router-dom";
import { connect } from "react-redux";

import NavB from "./components/layouts/NavB";
import Footer from "./components/layouts/Footer";
import HomePage from "./components/mainPages/HomePage";
import SingInPage from "./components/mainPages/SingInPage";
import BecomeAPartnerPage from "./components/mainPages/BecomeAPartnerPage";
import OffersPage from "./components/mainPages/OffersPage";
import RestaurantsPage from "./components/mainPages/RestaurantsPage";
import AboutUsPage from "./components/mainPages/AboutUsPage";
import ContactUsPage from "./components/mainPages/ContactUsPage";
import PrivacyPolicy from "./components/mainPages/PrivacyPolicy";
import RestaurantDetailsPage from "./components/mainPages/RestaurantDetailsPage";
import ProfilePage from "./components/mainPages/ProfilePage.js";
import MyOrdersitemDetails from "./components/profile/MyOrdersitemDetails";
import VerifyCodePage from "./components/mainPages/VerifyCodePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: "rtl",
    };
  }
  render() {
    return (
      <HashRouter basename="/">
      <div className="App" dir={this.props.lan === "AR" ? "rtl" : "ltr"}>
          <NavB />

          <Route exact path="/" component={HomePage} />
          <Route exact path="/SignIn" component={SingInPage} />
          <Route exact path="/BecomeAPartner" component={BecomeAPartnerPage} />
          <Route exact path="/Offers" component={OffersPage} />
          <Route exact path="/Restaurant" component={RestaurantsPage} />
          <Route exact path="/AboutUs" component={AboutUsPage} />
          <Route exact path="/ContactUs" component={ContactUsPage} />
          <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route
            exact
            path="/Restaurant/id"
            component={RestaurantDetailsPage}
          />
          <Route exact path="/Profile" component={ProfilePage} />
          <Route exact path="/Order/id" component={MyOrdersitemDetails} />
          <Route exact path="/VerifyCode" component={VerifyCodePage} />

          <Footer />
        </div>
      </HashRouter>
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

export default connect(mapStateToProps)(App);
