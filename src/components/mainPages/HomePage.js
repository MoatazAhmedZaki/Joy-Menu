import React, { Component } from "react";
import HomeHeader from "../home-components/HomeHeader";
import Services from "../home-components/Services";
import RestaurantsSection from "../home-components/RestaurantsSection";
import OffersSection from "../home-components/OffersSection";
import JoinUsSection from "../home-components/JoinUsSection";
import BrowseSection from "../home-components/BrowseSection";
import JoyMobileSection from "../home-components/JoyMobileSection";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { rest: [1, 2, 3, 4, 5, 6], rest2: [1, 2, 3, 4, 5, 6] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HomeHeader />
        <Services />
        <RestaurantsSection rest={this.state.rest} />
        <OffersSection rest={this.state.rest2} />
        <JoinUsSection />

        <BrowseSection />

        <JoyMobileSection />
      </div>
    );
  }
}
