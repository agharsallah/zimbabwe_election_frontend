import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../shared/Navbar';
import counterpart from 'counterpart';
import { Divider } from 'material-ui';

export default class RootHome extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const TITLE = <Translate type='text' content='home.title' />//Municipal election data
    /* translation 1st Card */
    const TITLECARD = <Translate type='text' content='card.title1' />//Presidential results 201
    const DESC_CARD = <Translate type='text' content='card.description1' />//desc

    return (
      <div>
        <Navbar home='active' about='' data='' contact='' />

        <div className="page-title parallax parallax2">
          <div className="title-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="h1-title">Zimbabwe election </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="attribution">
            <h6 className="h5-title">AP Photo- Ben Curtis </h6>
          </div>
        </div>


      </div>
    );
  }
}
