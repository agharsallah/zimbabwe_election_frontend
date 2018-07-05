import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

export default class RootAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const TITLE = <Translate type='text' content='about.title' />//Zimbabwe election
        const ABOUT_TEXT1 = <Translate type='text' content='about.aboutText1' />//Zimbabwe is having it\'s first..
        const ABOUT_TEXT2 = <Translate type='text' content='about.aboutText2' />//we aim to....
        const LIST_ITEM1 = <Translate type='text' content='about.listItem1' />//Creating a centralized hub..
        const LIST_ITEM2 = <Translate type='text' content='about.listItem2' />//Presenting information in a 
        const LIST_ITEM3 = <Translate type='text' content='about.listItem3' />//Providing a meaningful ..
        const OS_TITLE = <Translate type='text' content='about.osTitle' />//we aim to....
        const ABOUT_TEXT3 = <Translate type='text' content='about.aboutText3' />//we aim to....
        const OS_ITEM1 = <Translate type='text' content='about.osItem1' />//QGIS for maps design 
        const OS_ITEM2 = <Translate type='text' content='about.osItem2' />//Html, React.js and Css for frontend 
        const OS_ITEM3 = <Translate type='text' content='about.osItem3' />//Leaflet for map visualizations 


        return (
            <div>
                <Navbar home='' about='active' data='' contact='' />

                <section className="main-services">
                    <div className="container">
                        <div className="row">
                            <div className="flat-title style1">
                                <h2>{TITLE}</h2>
                            </div>
                        </div>

                        <div className='article-text-style' >
                            <p >
                                {ABOUT_TEXT1}
                                <br /><br />
                                {ABOUT_TEXT2}
                            </p>
                            <ul className='col-md-offset-1' style={{ listStyleType: 'square' }}>
                                <li>{LIST_ITEM1}</li>
                                <li>{LIST_ITEM2}</li>
                                <li>{LIST_ITEM3} </li>
                            </ul>

                            <br />
                            <h2>{OS_TITLE}</h2>
                            <p >{ABOUT_TEXT3}
                                <a href="https://github.com/hunter-x/zimbabwe_election_frontend" target='blank' >
                                    <RaisedButton
                                        style={{ marginLeft: '10px' }}
                                        label="Github "
                                        labelPosition="before"
                                        primary={true}
                                        icon={<FontIcon className="fab fa-github" />}
                                    />
                                </a>
                            </p>
                            <ul className='col-md-offset-1' style={{ listStyleType: 'square' }}>
                                <li>{OS_ITEM1}</li>
                                <li>{OS_ITEM2}</li>
                                <li>{OS_ITEM3} </li>
                            </ul>

                        </div>

                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
