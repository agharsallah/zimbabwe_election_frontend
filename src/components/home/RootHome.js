import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Card from './card';

export default class RootHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSideBar: ['active', '', ''],
      sideBarSelectedName: 'all'
    }
  }
  handleActive(value, sideBarSelectedName) {
    let activeSideBar = ['', '', ''];
    activeSideBar[value] = 'active';
    console.log(value);
    this.setState({ activeSideBar, sideBarSelectedName });
  }
  render() {
    const TITLE = <Translate type='text' content='home.title' />//Zimbabwe election
    /* translation Side Bar*/
    const OUR_VIS = <Translate type='text' content='sidebar_home.our_vis' />//Our Visualizations
    const ALL = <Translate type='text' content='sidebar_home.all' />//All
    const PRESIDENTIAL = <Translate type='text' content='sidebar_home.presidential' />//Presidential election 
    const ASSEMBLY_HOUSSE = <Translate type='text' content='sidebar_home.assemblyHousse' />//Assembly housse
    /* translation Card*/
    const TITLECARD1 = <Translate type='text' content='card.title1' />//Our Visualizations
    const DESC_CARD1 = <Translate type='text' content='card.description1' />//Our Visualizations
    const TITLECARD2 = <Translate type='text' content='card.title2' />//Our Visualizations
    const DESC_CARD2 = <Translate type='text' content='card.description2' />//Our Visualizations
    const TITLECARD3 = <Translate type='text' content='card.title3' />//Our Visualizations
    const DESC_CARD3 = <Translate type='text' content='card.description3' />//Our Visualizations
    /*Assembly housse cards  */
    const TITLECARD4 = <Translate type='text' content='card.title4' />//Voter turnout
    const DESC_CARD4 = <Translate type='text' content='card.description4' />//Voter turnout of the 2013 Assembly housse per province
    const TITLECARD5 = <Translate type='text' content='card.title5' />//Voter turnout
    const DESC_CARD5 = <Translate type='text' content='card.description5' />//Voter turnout of the 2013 Assembly housse per province
    const TITLECARD6 = <Translate type='text' content='card.title6' />//Voter turnout
    const DESC_CARD6 = <Translate type='text' content='card.description6' />//Voter turnout of the 2013 Assembly housse per province

    const ArrayOfVisualizations = [
      { img: "parties-res-13.jpg", redirectLink: "/pres-res-13", title: TITLECARD1, description: DESC_CARD1, ribbon: 'Presidential 13',color:'#1CC051' },
      { img: "house of assembly invalid.jpg", redirectLink: "/assembly-res-13", title: TITLECARD6, description: DESC_CARD6, ribbon: 'House of assembly 13',color:'#3E96CF' },
      { img: "parties-turnout-13.jpg", redirectLink: "/pres-turnout-13", title: TITLECARD3, description: DESC_CARD3, ribbon: 'Presidential 13',color:'#1CC051' },
      { img: "house of assembly invalid.jpg", redirectLink: "/assembly-invalid-13", title: TITLECARD5, description: DESC_CARD5, ribbon: 'House of assembly 13',color:'#3E96CF' },
      { img: "parties-invalid-13.jpg", redirectLink: "/pres-invalid-13", title: TITLECARD2, description: DESC_CARD2, ribbon: 'Presidential 13',color:'#1CC051' },
      /*  { img: "parties-turnout-13.jpg", redirectLink: "/assembly-turnout-13", title: TITLECARD4, description: DESC_CARD4, ribbon: 'Assembly house 13',color:'#3E96CF' }, */
 
    ]
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
            <p className="h5-title">AP photo by Ben Curtis </p>
          </div>
        </div>

        <section className="main-services">
          <div className="container">
            <div className="row">
              <div className="wrap-services-1">

                <div className="col-md-3">
                  <div className="widget-nav-tab">
                    <h3>{OUR_VIS}</h3>
                    <ul className="tab-about" >
                      <li style={{color:'#000'}} onClick={this.handleActive.bind(this, 0, 'all')} className={this.state.activeSideBar[0]} >{ALL}</li>
                      <li style={{color:'#1CC051'}} onClick={this.handleActive.bind(this, 1, 'pres13')} className={this.state.activeSideBar[1]} >{PRESIDENTIAL}</li>
                      <li style={{color:'#3E96CF'}} onClick={this.handleActive.bind(this, 2, 'assemb13')} className={this.state.activeSideBar[2]} >{ASSEMBLY_HOUSSE}</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="content-inner">
                    {
                      this.state.sideBarSelectedName === 'all' ?
                        ArrayOfVisualizations.map(vizElement => (
                          <Card img={vizElement.img} redirectLink={vizElement.redirectLink} title={vizElement.title} description={vizElement.description} ribbon={vizElement.ribbon} ribbonColor={vizElement.color} />
                        ))
                        : this.state.sideBarSelectedName === 'pres13' ?
                            ArrayOfVisualizations.map(vizElement => (
                              vizElement.ribbon === 'Presidential 13' ?
                                <Card img={vizElement.img} redirectLink={vizElement.redirectLink} title={vizElement.title} description={vizElement.description} ribbon={vizElement.ribbon} ribbonColor={vizElement.color} />
                                : null
                            ))
                        :this.state.sideBarSelectedName === 'assemb13' ?
                            ArrayOfVisualizations.map(vizElement => (
                              vizElement.ribbon === 'House of assembly 13' ?
                                <Card img={vizElement.img} redirectLink={vizElement.redirectLink} title={vizElement.title} description={vizElement.description} ribbon={vizElement.ribbon} ribbonColor={vizElement.color} />
                                : null
                            ))
                        :null
                  
                  }

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
