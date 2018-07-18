import React, { Component } from 'react';
import config from '../../config'
import axios from 'axios';
import Translate from 'react-translate-component';
var _ = require('lodash');

export default class WaffleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeIsLoaded: false, assembly_house_res13: [], SelecteProvince: 'All'
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
                console.log(response);
                this.setState({ assembly_house_res13: JSON.parse(response.data.data), all_assembly_house_res13: JSON.parse(response.data.data), shapeIsLoaded: true });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    componentWillReceiveProps(nextProps) {
        //if the province changes we update the data array
        if (nextProps.SelecteProvince != 'All') {
        
            let assembly_house_res13 = _.filter(this.state.all_assembly_house_res13, function (o) {
                if (o.province == nextProps.SelecteProvince) return o;
            });
            this.setState({ assembly_house_res13 })
        }else{
            this.setState({ assembly_house_res13:this.state.all_assembly_house_res13 })
        }
        



    }
    /* filter by province function */

    render() {
        let colorBox;
        const DEPUTY_NAME = <Translate type='text' content='resultsHouse13.deputy_name' />//Deputy Name
        const VOTES_PERCENTAGE = <Translate type='text' content='resultsHouse13.vote_per' />//Votes Percentage
        const VOTES_NUMBER = <Translate type='text' content='resultsHouse13.vote_num' />//Votes Number

        return (
            <div className="content-inner">
                {

                    this.state.assembly_house_res13.map(function (constituencyElm) {
                        constituencyElm.party_winner == 'mdc_t' ? colorBox = '#EB4948' : constituencyElm.party_winner == 'indep' ? colorBox = '#F7B62C' : colorBox = '#7ECF68';
                        return (
                            <a key={constituencyElm.winner_name}

                                className="box col-md-1 tooltipRectangle" style={{ background: colorBox }} >
                                <div className="inner"></div>
                                <div className="tooltiptext">
                                    <h5 style={{ textAlign: 'center' }}>{constituencyElm.constituency} / {constituencyElm.province}</h5>
                                    <h5 style={{ color: '#FE9187' }}>{DEPUTY_NAME}: <span style={{ color: '#fff' }} > {constituencyElm.winner_name} </span> </h5>
                                    <h5 style={{ color: '#FE9187' }}>{VOTES_PERCENTAGE}: <span style={{ color: '#fff' }} >  {(parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''))).toFixed(2) + ' %'} </span> </h5>
                                    <h5 style={{ color: '#FE9187' }}>{VOTES_NUMBER}: <span style={{ color: '#fff' }} >  {commaNum((constituencyElm.winner_votes).replace(/,/g, '')) + ' votes'} </span> </h5>

                                </div>
                            </a>
                        )
                    })

                }
            </div>
        );
    }
}

const commaNum = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}