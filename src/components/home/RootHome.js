import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Menu from '../menu/Menu';
import Card from './Card';
import counterpart  from 'counterpart';

export default class RootHome extends Component {
  constructor(props) {
    super(props);
    this.state = { menuStyle: true, mapZIndex: 150 }
  }
  openMenu() {
    //this is trigered wheen the user clicks the menu icon
    let menuStyle = !this.state.menuStyle

    let mapZIndex;
    menuStyle == true ? mapZIndex = 150 : mapZIndex = 100;
    this.setState({ menuStyle, mapZIndex });
  }

  render() {
    let menuStyle = ''; this.state.menuStyle ? menuStyle = '' : menuStyle = 'nav-active'
    //let { chosenViz } = this.state;
    const TITLE = <Translate type='text' content='home.title' />//Municipal election data
    /* translation 1st Card */
    const TITLECARD = <Translate type='text' content='card.title1' />//Presidential results 201
    const DESC_CARD = <Translate type='text' content='card.description1' />//desc

    return (
      <section className={menuStyle} >
        <Menu activeViz='activeLink'
          activeAbout=''
          activeContact=''
          openMenu={this.openMenu.bind(this)}
        />
        <div className="site-content">
          <h1 className="site-content__headline">{TITLE}</h1>
        </div>

        <div className='container'>
          <div className='row col-md-12' style={{zIndex:this.state.mapZIndex}} >
            <Card img="card1.jpg" redirectLink="/" title={TITLECARD} description={DESC_CARD} />
          </div>
          
        </div>
      </section>
    );
  }
}
