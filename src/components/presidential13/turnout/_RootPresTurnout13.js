
import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Translate from 'react-translate-component';
export default class _RootPresTurnout13 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const TITLE = <Translate type='text' content='pres13Turnout.title' />//Total Votes
    //const {  } = this.state;
    return (
      <div>
        <Navbar home='' about='' data='' contact='' />
        <div id="content">
          <section >
            <div className="menu-trigger"></div>
            <div className="site-content">
              <h1 className="site-content__headline"> {TITLE}</h1>
            </div>
            
          </section>

        </div>

      </div>
    );
  }
}
