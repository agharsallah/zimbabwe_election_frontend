import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Translate from 'react-translate-component';
import './styleBox.css'
import SeatsSemiCircle from './SeatsSemiCircle';
import SeatsSemiCircleGender from './SeatsSemiCircleGender';
import WaffleChart from './WaffleChart';
import WaffleChartGender from './WaffleChartGender';
import ChartController from './ChartController';
import Footer from '../../shared/Footer';
import config from '../../config'
import axios from 'axios';
export default class _RootAssemblyRes13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'result theme',
            SelecteProvince: 'All',
            subFilterGender: 'all gender',
            zanu: 161, mdct: 48, indep: 1, assembly_house_res13: [], all_assembly_house_res13: [],
            minMaxObj:{minFilter:0,maxFilter:100},activeFilter:'none'

        }
    }
    componentWillMount() {

        let qString = `${config.apiUrl}/api/shape/zim_assemblyhouse_res_13`;
        console.log(qString);
        axios({
            method: 'get',
            url: qString,
            headers: {
                'name': 'Isie',
                'password': 'Isie@ndDi',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },

        })
            .then(response => {
                //console.log(response);
                this.setState({ assembly_house_res13: JSON.parse(response.data.data), all_assembly_house_res13: JSON.parse(response.data.data), shapeIsLoaded: true });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    //this function is sent to the chart controller to get which theme is selected
    getThemeFilterValueFn(filterVal) {
        console.log(filterVal);
        this.setState({ filter: filterVal });
    }
    //this function is sent to the chart controller to get which province is selected from Selector of province in result theme
    getProvinceFilterWaffleFn(SelecteProvince) {
        console.log('SelecteProvince', SelecteProvince);
        this.setState({ SelecteProvince });
    }
    //this function is sent to chart controller to get the count of different parties
    getPartiesNumCountFn(assembly_house_res13) {
        /* if (this.state.SelecteProvince!='All') { */
        let zanu = 0, mdct = 0, indep = 0;
        for (let i = 0; i < assembly_house_res13.length; i++) {
            let constituencyElm = assembly_house_res13[i];
            constituencyElm.party_winner == 'zanu' ? zanu++ : constituencyElm.party_winner == 'mdc_t' ? mdct++ : constituencyElm.party_winner == 'indep' ? indep++ : null;
        }
        console.log(zanu, mdct, indep);
        this.setState({ assembly_house_res13, zanu, mdct, indep });

    }
    //this function is sent to the chart controller to get which gender is selected
    getGenderFilterValueFn(subFilterGender) {
        console.log('subFilterGender:', subFilterGender);
        this.setState({ subFilterGender });

    }

    getGenderArrayFn(assembly_house_res13_per_gender) {
        this.setState({ assembly_house_res13: assembly_house_res13_per_gender });
    }

    getVotePerFn(minMaxObj) {

        console.log('minMaxObj', minMaxObj);
        this.setState({minMaxObj,activeFilter:'percentage filter'});
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
                                    sendPartyNumCount={this.getPartiesNumCountFn.bind(this)}

                                    assembly_house_res13={this.state.assembly_house_res13}
                                    all_assembly_house_res13={this.state.all_assembly_house_res13}

                                    sendGenderFilterValue={this.getGenderFilterValueFn.bind(this)}
                                    sendGenderArray={this.getGenderArrayFn.bind(this)}

                                    sendVotePercObject={this.getVotePerFn.bind(this)}
                                />
                            </div>
                            <div className='col-md-10'>
                                <div >

                                </div>

                                {this.state.filter === 'result theme' ?
                                    <div >
                                        <SeatsSemiCircle
                                            zanuSeatsNum={this.state.zanu}
                                            mdcSeatsNum={this.state.mdct}
                                            indepSeatsNum={this.state.indep}
                                            SelecteProvince={this.state.SelecteProvince}
                                        />
                                        <WaffleChart
                                            SelecteProvince={this.state.SelecteProvince}
                                            assembly_house_res13={this.state.assembly_house_res13}
                                            all_assembly_house_res13={this.state.all_assembly_house_res13}
                                            subFilterGender={this.state.subFilterGender}

                                            minMaxObj={this.state.minMaxObj}
                                            activeFilter={this.state.activeFilter}
                                        />
                                        <br />
                                        <div className='col-md-12' style={{ marginTop: '20px' }} >
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
                                    : this.state.filter === 'per gender theme' ?
                                        <div>
                                            <SeatsSemiCircleGender
                                                zanuSeatsNum={this.state.zanu}
                                                mdcSeatsNum={this.state.mdct}
                                                indepSeatsNum={this.state.indep}
                                                SelecteProvince={this.state.SelecteProvince}
                                            />
                                            <WaffleChartGender
                                                SelecteProvince={this.state.SelecteProvince}
                                                assembly_house_res13={this.state.assembly_house_res13}
                                                all_assembly_house_res13={this.state.all_assembly_house_res13}
                                                subFilterGender={this.state.subFilterGender}
                                            />

                                            <div className='col-md-12' style={{ marginTop: '20px' }} >
                                                <div className='col-md-offset-3'>
                                                    <div className="box " style={{ background: '#FC0F3A' }} ></div> <h3 className='col-md-3' style={{ marginTop: '1vh' }}>female</h3>
                                                </div>
                                                <div className='col-md-offset-2'>
                                                    <div className="box " style={{ background: '#22A8DB' }} ></div> <h3 className='col-md-2' style={{ marginTop: '1vh' }}>male</h3>
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>


                </div>
                <div style={{ marginTop: '50px' }}>
                    <Footer />

                </div>
            </div>
        );
    }
}

