import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Translate from 'react-translate-component';
import './card.css'

export default class Card extends Component {

    render() {
        const imageLink = "/img/card/" + this.props.img
        const { redirectLink, title, description, ribbon } = this.props
        const READMORE = <Translate type="text" content="home.readmore" />//readmore
        return (
            <div className="col-md-6">
                <article className="main-post style2">
                    <div className="featured-post" style={{height:'185px'}}>
                        <Link to={redirectLink} >
                            <img src={imageLink} alt={description} />
                        </Link>
                    </div>
                    <div className="entry-content">
                        <div className="date" style={{backgroundColor:this.props.ribbonColor}}>
                            {ribbon}
                        </div>
                        <h3>
                            <Link to={redirectLink} >{title}</Link>
                        </h3>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="card-read-more">
                    <Link to={redirectLink} className="btn btn-link btn-block" style={{color:'#5cc06b'}} >{READMORE}</Link>
                </div>

                </article>
            </div>
            
        );
    }
}

