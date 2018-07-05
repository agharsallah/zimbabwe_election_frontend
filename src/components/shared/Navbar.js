import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './shared.css';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: 'Language' }
    }
    componentWillMount() {
        //counterpart.getLocale();
        counterpart.setLocale('en');
    }
    handleChangeDropdown(eventkey, event) {
        console.log(eventkey, event.target.innerText)
        this.setState({ eventkey, dropdown: event.target.innerText })
        counterpart.setLocale(eventkey);
    };

    render() {
        const ENGLISH = <Translate type='text' content='language.english' />//Mun Map
        const FRENCH = <Translate type='text' content='language.french' />//Mun Map
        const HOME = <Translate type='text' content='navbar.home' />//home
        const ABOUT = <Translate type='text' content='navbar.about' />//about
        const DATA = <Translate type='text' content='navbar.data' />//data
        const CONTACT = <Translate type='text' content='navbar.contact' />//contact

        return (
            <div>
            <header id="header" className="header bg-color">
			<div className="container">
				<div className="row">
					<div className="header-wrap">
						 <div id="logo" className="logo">
							<Link style={{textDecoration: 'none'}} to="/" title="">
                                {/* <img src="images/logo.png" alt="logo Election Data"/> */}
                                <h3 style={{color:'#18ba60'}} >Zimbabwe Election Data</h3> 
							</Link>
						</div> 
						
						<div className="nav-wrap">
							<div className="btn-menu">
                                <span></span>
                            </div>
							<nav id="mainnav" className="mainnav">
								<ul className="menu">
									<li className={this.props.home}>
                                        <Link to="/" title="">{HOME}</Link>
                                    </li>
                                    <li className={this.props.about}>
                                        <Link to="/about" title="">{ABOUT}</Link>
                                    </li>
                                    <li className={this.props.data} >
										<Link to="/data" title="">{DATA}</Link>
									</li>
                                    <li className={this.props.contact}>
                                        <Link to="/contact-us" title="">{CONTACT}</Link>
                                       {/*  <ul className="sub-menu">
                                            <li><a href="contact-v1.html" title="">Contact 01</a></li>
                                        </ul> */}
                                    </li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
            </div>
        );
    }
}