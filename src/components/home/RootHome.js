import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../shared/Navbar';
import Card from './card' ;

export default class RootHome extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSideBar: ['active', '', ''] }
  }
  handleActive(value) {
    let activeSideBar = ['', '', ''];
    activeSideBar[value] = 'active';
    console.log(value);
    this.setState({ activeSideBar });
  }
  render() {
    const TITLE = <Translate type='text' content='home.title' />//Zimbabwe election
    /* translation Side Bar*/
    const OUR_VIS = <Translate type='text' content='sidebar_home.our_vis' />//Our Visualizations
    const ALL = <Translate type='text' content='sidebar_home.all' />//All
    const PRESIDENTIAL = <Translate type='text' content='sidebar_home.presidential' />//Presidential election 
    const OTHER = <Translate type='text' content='sidebar_home.other' />//Other
    /* translation Card*/
    const TITLECARD1 = <Translate type='text' content='card.title1' />//Our Visualizations
    const DESC_CARD1 = <Translate type='text' content='card.description1' />//Our Visualizations

    return (
      <div>
        <Navbar home='active' about='' data='' contact='' />

        <div className="page-title parallax parallax2">
          <div className="title-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="h1-title">{TITLE} </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="attribution">
            <h6 className="h5-title">AP Photo- Ben Curtis </h6>
          </div>
        </div>

        <section className="main-services">
          <div className="container">
            <div className="row">
              <div className="wrap-services-1">

                <div className="sidebar-services">
                  <div className="widget-nav-tab">
                    <h3>{OUR_VIS}</h3>
                    <ul className="tab-about" >
                      <li onClick={this.handleActive.bind(this, 0)} className={this.state.activeSideBar[0]} >{ALL}</li>
                      <li onClick={this.handleActive.bind(this, 1)} className={this.state.activeSideBar[1]} >{PRESIDENTIAL}</li>
                      <li onClick={this.handleActive.bind(this, 2)} className={this.state.activeSideBar[2]} >{OTHER}</li>
                    </ul>
                  </div>
                </div>

                <div className="services-content-tab">
                  <div className="content-inner">
                  <Card img="test.jpg" redirectLink="/pres13" title={TITLECARD1} description={DESC_CARD1} ribbon='presidential 13' />
                  <Card img="test.jpg" redirectLink="/pres13" title='other' description={DESC_CARD1} ribbon='other' />
                  <Card img="test.jpg" redirectLink="/pres13" title='pres invalid votes' description={DESC_CARD1} ribbon='presidential 13' />

  
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


      </div>
    );
  }
}
