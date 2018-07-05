import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

export default class RootContact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const TITLE = <Translate type='text' content='contact.title' />//Zimbabwe election

        return (
            <div>
                <Navbar home='' about='' data='' contact='active' />

                <section className="main-services">
                    <div className="container">
                        <div className="row">
                            <div className="flat-title style1">
                                <h2>{TITLE}</h2>
                            </div>
                        </div>

                        <div className='article-text-style'>
                        Thank you for your interest, we're open for collaboration, ideas, improvements ... So feel free to send us an email
                        <a href="mailto:agharsallah@democracyinternational.org" target='blank' >
                            <RaisedButton
                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                label="Email "
                                labelPosition="before"
                                icon={<FontIcon className="far fa-envelope" />}
                            />
                        </a>
                        , drop us a line on Gitter
                        <a href="https://gitter.im/Election-data/Zimbabwe_election_data" target='blank' >
                            <RaisedButton
                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                label="Gitter Channel "
                                labelPosition="before"
                                icon={<FontIcon className="fab fa-gitter" />}
                            />
                        </a>,
                        Or open an issue on Github 
                        <a href="https://github.com/hunter-x/zimbabwe_election_frontend/issues" target='blank' >
                            <RaisedButton
                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                label="Github "
                                labelPosition="before"
                                icon={<FontIcon className="fab fa-github" />}
                            />
                        </a>
                    </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
