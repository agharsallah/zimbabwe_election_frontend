import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Translate from 'react-translate-component';
import './styleBox.css'
import SeatsSemiCircle from './SeatsSemiCircle';
import WaffleChart from './WaffleChart';
import ChartController from './ChartController' ;

export default class _RootAssemblyRes13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        const TITLE = <Translate type='text' content='pres13Invalid.title' />//You can select rejected or unacounted from the list
        return (
            <div>
                <Navbar home='' about='' data='' contact='' />
                <div id="content">
                    <div className="menu-trigger"></div>
                    <div className="site-content">
                        <h1 className="site-content__headline"> House of Assembly results  </h1>
                    </div>
                    <div className='col-md-12'>
                        <SeatsSemiCircle />
                    </div>
                    <div className="row">

                        <div className='col-md-12'>

                            <div className="col-md-2 card info-card-font" >
                                
                                <ChartController/>
                            </div>

                            <div className="col-md-10 col-sm-12">
                               <WaffleChart />
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className='col-md-12' >
                        <div className='col-md-offset-3'>
                            <div className="box " style={{ background: '#F7B62C' }} ></div> <h3 className='col-md-3' style={{ marginTop: '1vh' }}>Independent</h3>
                        </div>
                        <div className='col-md-offset-2'>
                            <div className="box " style={{ background: '#EB4948' }} ></div> <h3 className='col-md-2' style={{ marginTop: '1vh' }}>MDC-T</h3>
                        </div>
                        <div className='col-md-offset-2'>
                            <div className="box " style={{ background: '#7ECF68' }} ></div> <h3 className='col-md-3' style={{ marginTop: '1vh' }}>ZANU-PF</h3>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

