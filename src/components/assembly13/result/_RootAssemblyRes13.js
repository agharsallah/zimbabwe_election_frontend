import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Translate from 'react-translate-component';
import './styleBox.css'
import SeatsSemiCircle from './SeatsSemiCircle';
import WaffleChart from './WaffleChart';
import ChartController from './ChartController';
import Footer from '../../shared/Footer';

export default class _RootAssemblyRes13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'result theme',
            SelecteProvince: 'All'
        }
    }
    getThemeFilterValueFn(filterVal) {
        console.log(filterVal);
        this.setState({ filter: filterVal });
    }
    getProvinceFilterWaffleFn(SelecteProvince) {
        console.log(SelecteProvince);
        this.setState({ SelecteProvince });
    }
    render() {
        const TITLE = <Translate type='text' content='resultsHouse13.title' />//House of Assembly results
        const INDEP = <Translate type='text' content='resultsHouse13.indep' />//Independent
        const MDCT = <Translate type='text' content='resultsHouse13.mdct' />//MDC-T
        const ZANU = <Translate type='text' content='resultsHouse13.zanu' />//ZANU-PF
        return (
            <div>
                <Navbar home='' about='' data='' contact='' />
                <div id="content">
                    <div className="menu-trigger"></div>
                    <div className="site-content">
                        <h1 className="site-content__headline"> {TITLE}  </h1>
                    </div>

                    <div className="row">

                        <div className='col-md-12'>


                            <div className="col-md-2 card info-card-font" >
                                <ChartController
                                    sendThemeFilterValue={this.getThemeFilterValueFn.bind(this)}
                                    sendProvinceFilterWaffle={this.getProvinceFilterWaffleFn.bind(this)}
                                />
                            </div>
                            <div className='col-md-10'>
                                <div >
                                    <SeatsSemiCircle />
                                </div>

                                {this.state.filter === 'result theme' ?
                                    <div >
                                        <WaffleChart
                                            SelecteProvince={this.state.SelecteProvince}
                                        />
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='col-md-12' >
                        <div className='col-md-offset-3'>
                            <div className="box " style={{ background: '#F7B62C' }} ></div> <h3 className='col-md-3' style={{ marginTop: '1vh' }}>{INDEP}</h3>
                        </div>
                        <div className='col-md-offset-2'>
                            <div className="box " style={{ background: '#EB4948' }} ></div> <h3 className='col-md-2' style={{ marginTop: '1vh' }}>{MDCT}</h3>
                        </div>
                        <div className='col-md-offset-2'>
                            <div className="box " style={{ background: '#7ECF68' }} ></div> <h3 className='col-md-3' style={{ marginTop: '1vh' }}>{ZANU}</h3>
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: '80px' }}>
                    <Footer />

                </div>
            </div>
        );
    }
}

