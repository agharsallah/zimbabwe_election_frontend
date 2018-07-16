import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Translate from 'react-translate-component';
import TurnoutMap from './TurnoutMap';
export default class _RootAssemblyTurnout13 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gradesDistrict: [0, 2, 3], gradesProvince: [0, 2, 3]
    }
  }

  render() {
    const TITLE = <Translate type='text' content='pres13Turnout.title' />//You can select rejected or unacounted from the list
    const HIGHEST = <Translate type='text' content='pres13Turnout.highest_turnout' />//Highest turnout votes
    const LOWEST = <Translate type='text' content='pres13Turnout.lowest_turnout' />//Lowest invalid votes
    const AVERAGE = <Translate type='text' content='pres13Turnout.average' />//Total invalid votes

    return (
      <div>
        <Navbar home='' about='' data='' contact='' />
        <div id="content">
          <section >
            <div className="menu-trigger"></div>
            <div className="site-content">
              <h1 className="site-content__headline">{TITLE}- House of Assembly </h1>
            </div>

            <div className="light parallax-container center info-card-section" data-overlay="95">
              <div className="container">
                <div className="row m-space">
                  <div className="col-md-4 col-xs-6 info-card-font">
                    <i className="ion-ios-analytics-outline"></i>
                    <h3><br/> 56.8% </h3>
                    <p>{AVERAGE}</p>
                  </div>
                  <div className="col-md-4 col-xs-6 info-card-font">
                    <i className="ion-ios-lightbulb-outline"></i>
                    <h3>44% <br/> in  Bulawayo </h3>
                    <p>{LOWEST}</p>
                  </div>
                  <div className="col-md-4 col-xs-6 info-card-font">
                    <i className="ion-ios-camera-outline"></i>
                    <h3>70.7% <br/> in Mashonaland Central </h3>
                    <p>{HIGHEST}</p>
                  </div>
                </div>
              </div>
            </div>
            <TurnoutMap  />
          </section>

        </div>

      </div>
    );
  }
}
