
import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Translate from 'react-translate-component';
import InvalidMap from './InvalidMap';
export default class _RootAssemblyInvalid13 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gradesDistrict: [0, 2, 3], gradesProvince: [0, 2, 3]
    }
  }

  render() {
    const TITLE = <Translate type='text' content='pres13Invalid.title' />//You can select rejected or unacounted from the list
    const HIGHEST = <Translate type='text' content='pres13Invalid.highest_invalid' />//Highest invalid votes
    const LOWEST = <Translate type='text' content='pres13Invalid.lowest_invalid' />//Lowest invalid votes
    const TOTAL = <Translate type='text' content='pres13Invalid.total_invalid' />//Total invalid votes

     const { gradesDistrict, gradesProvince } = this.state;
    return (
      <div>
        <Navbar home='' about='' data='' contact='' />
        <div id="content">
          <section >
            <div className="menu-trigger"></div>
            <div className="site-content">
              <h1 className="site-content__headline">{TITLE} - House of Assembly    </h1>
            </div>

            <div className="light parallax-container center info-card-section" data-overlay="95">
              <div className="container">
                <div className="row m-space">
                  <div className="col-md-4 col-xs-6 info-card-font">
                    <i className="ion-ios-analytics-outline"></i>
                    <h3>69,348 - 2% </h3>
                    <p>{TOTAL}</p>
                  </div>
                  <div className="col-md-4 col-xs-6 info-card-font">
                    <i className="ion-ios-lightbulb-outline"></i>
                    <h3>1,277 - 0.95% <br /> in Bulawayo</h3>
                    <p>{LOWEST}</p>
                  </div>
                  <div className="col-md-4 col-xs-6 info-card-font">
                    <i className="ion-ios-camera-outline"></i>
                    <h3>6,490 - 3.18% <br /> in Matabeleland North</h3>
                    <p>{HIGHEST}</p>
                  </div>
                </div>
              </div>
            </div>
            <InvalidMap  gradesDistrict={gradesDistrict} gradesProvince={gradesProvince}  />
          </section>

        </div>

      </div>
    );
  }
}
